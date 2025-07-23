'use server';

import Razorpay from "razorpay";
import Payment from "@/models/Payment";
import { mongodb } from "@/lib/mongodb";
import User from "@/models/User";

export const initiate = async (amount, to_username, paymentform) => {
    await mongodb();

    const instance = new Razorpay({
        key_id: process.env.NEXT_PUBLIC_KEY_ID,
        key_secret: process.env.KEY_SECRET
    });

    const options = {
        amount: Number.parseInt(amount) * 100,
        currency: "INR",
        receipt: `receipt_${Date.now()}`,
        notes: {
            name: paymentform.name,
            message: paymentform.message
        }
    };

    const order = await instance.orders.create(options);

    await Payment.create({
        oid: order.id,
        amount: Number.parseInt(amount),
        to_user: to_username,
        name: paymentform.name,
        message: paymentform.message,
        status: "pending"
    });

    return order;
};

export const fetchuser = async (username) => {
    await mongodb();
    const u = await User.findOne({ username });
    if (!u) return null;
    const user = u.toObject({ flattenObjectIds: true });
    return user;
};

export const fetchpayments = async (username) => {
    await mongodb();
    const p = await Payment.find({ to_user: username }).sort({ createdAt: -1 }).lean();
    return p;
};

// export const fetchuserByEmail = async (email) => {
//     await mongodb();
//     const u = await User.findOne({ email });
//     if (!u) return null;
//     return u.toObject({ flattenObjectIds: true });
// };


export const updateProfile = async (data, oldusername) => {
    await mongodb()
    let ndata = data
    // If the username is being updated check if the username is available
    if (oldusername !== ndata.username) {
        let u = await User.findOne({ username: oldusername })
        if (u) {
            return { error: "Username already exists" }
        }
    }
    await User.updateOne({ email: ndata.email }, ndata)
}