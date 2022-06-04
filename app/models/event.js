import mongoose from 'mongoose';

const Schema = new mongoose.Schema({
    members: [
        {
          _id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            require: true
          },
          role: {
            type: String,
            require:[true, 'Role is required']
          }
        }
    ],
    name:{
        type: String,
        require:[true, 'Name is required']
    },
    description:{
        type: String,
        require:[true, 'Description is required']
    },
    start:{
        type: Date,
        require:[true, 'Start Date is required']
    },
    end:{
        type: Date,
        require:[true, 'End Date is required']
    },
    location:{
        type: String,
        require:[true, 'Location is required']
    },
    fontImage:{
        type: String,
        require:[true, 'Font Image is required']
    },
    policy:{
        type: Boolean,
        require: [true, 'Access policy is required']
    }
},{
    collection: 'events',
    minimize: true,
    versionKey: false
}).set('toJSON', {
    transform: (doc, ret) => {
        ret.id = doc._id;
        delete doc._id
    }
});

export default Schema;