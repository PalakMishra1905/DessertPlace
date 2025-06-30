import mongoose from 'mongoose'

export const connectDB = async()=>{
    await mongoose.connect('mongodb+srv://mishrapalak104:IUtG2JfIal0n8CLk@cluster0.clspac3.mongodb.net/Dessert-palce')
    .then(()=>console.log('Connected to DB'))
}