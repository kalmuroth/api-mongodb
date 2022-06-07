import mongoose from 'mongoose';

const replySchema = new mongoose.Schema({
    send_by: {
      type: mongoose.Types.ObjectId,
      ref: 'User',
      required: true
    },
    comment: {
      type: String,
      required: true
    }
});

const baseSchema = new mongoose.Schema({
    link: {
        type: mongoose.Types.ObjectId,
        required: true
    },
    type_link: {
        type: String,
        enum: ['group', 'event'],
        required: true
    },
    messages: [
        {
            originalPoster: {
                type: mongoose.ObjectId,
                ref: 'User',
                require: true
            },
            content: {
                type: String,
                require: true
            },
            replys: [replySchema]
        }]
},{
    collection: 'threads',
    minimize: true,
    versionKey: false
}).set('toJSON', {
    transform: (doc, ret) => {
        ret.id = doc._id;
        delete doc._id
    }
});

export default baseSchema;