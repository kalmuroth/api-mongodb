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
    basicAccess:{
        type: Boolean,
        require: [true, 'Basic access is required']
    },
    adminAccess:{
        type: Boolean,
        require: [true, 'Admin access is required']
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