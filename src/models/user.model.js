import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({

    name:{
        type:String,
        required:true,
        min: 3,
    },
    email:{
        type:String,
        required:true,
        min: 5,
    },
    password:{
        type:String,
        required:true,
        min: 5,
    },
});

const userModel = mongoose.model('User', userSchema);
export default userModel;