import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://rahulkrpd2:rahukrpd2mongo@cluster0.qxbwjqv.mongodb.net/food-del').then(() => (console.log("DB is connected")))
}