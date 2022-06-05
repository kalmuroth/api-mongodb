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
    icon:{
        type: String,
        require:[true, 'Icon is required']
    },
    fontImage:{
        type: String,
        require:[true, 'Font Image is required']
    },
    type:{
        type: String,
        require:[true, 'Group Type is required']
    },
    basicAccessAll:{
        type: Boolean,
        require: [true, 'Give Basic Access to everyone ?']
    },
    adminAccessAll:{
        type: Boolean,
        require: [true, 'Give Admin Access to everyone ?']
    }
},{
    collection: 'groups',
    minimize: true,
    versionKey: false
}).set('toJSON', {
    transform: (doc, ret) => {
        ret.id = doc._id;
        delete doc._id
    }
});

export default Schema;