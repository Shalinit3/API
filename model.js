import mongoose from 'mongoose';
const schema = mongoose.Schema;

const User = new schema({
    name : String,
    time : Number,
    phone : Number,
    date : {
        type : Date,
        default : Date.now,
    }
});

export default mongoose.model('apiData', User) ;