import { NextResponse } from "next/server";
import { validatePaymentVerification } from "razorpay/dist/utils/razorpay-utils";
import Payment from "@/models/Payment";
import Razorpay from "razorpay";
import { mongodb } from "@/lib/mongodb";

export const POST = async (req) => {
    await mongodb()
    let body = await req.formData()
    body = Object.fromEntries(body)

    // Check if razorpayId is present on thr server
    let p = await Payment.findOne({ oid: body.razorpay_order_id })
    if (!p) {
         return NextResponse.json({success:false,message:"Order ID not found"})
    }

    // Verify the payment 
    let x = validatePaymentVerification({ "order_id": body.razorpay_order_id, "payment_id": body.razorpay_payment_id}, body.razorpay_signature , process.env.KEY_SECRET)

    if (x) {
        // Update the payment status
        const updatedPayment = await Payment.findOneAndUpdate({ oid: body.razorpay_order_id }, { done: "true" },{new:true})
        return NextResponse.redirect(`${process.env.NEXT_PUBLIC_URL}/${updatedPayment.to_user}?paymentdone=true`)
    }
    else{
        return NextResponse.json({success:false,message:"Payment verification failed"})
    }
}