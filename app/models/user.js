import mongoose from 'mongoose';

const Schema = new mongoose.Schema({
    firstname:{
        type: String,
        require:[true, 'First name is required']
    },
    lastname:{
        type: String,
        require:[true, 'Last name is required']
    },
    age:{
        type: Number,
        require:[true, 'Age is required'],
        min:[18, 'Age must not be inferior to 18 years']
    },
    password:{
        type: String,
        trim:true,
        require:[true, 'Password name is required (at least one letter and one number)'],
        match:[/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/]
    },
    email:{
        type: String,
        loweredcase:true,
        trim:true,
        match:[/.+@.+\..+/],
        unique:[true, 'Email already exist'],
        require:[true, 'Email name is required'],
        index:true
    }
},{
    collection: 'users',
    minimize: true,
    versionKey: false
}).set('toJSON', {
    transform: (doc, ret) => {
        ret.id = doc._id;
        delete doc._id
    }
});

export default Schema;