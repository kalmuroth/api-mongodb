import mongoose from 'mongoose';

const Schema = new mongoose.Schema({
    event: {
        type: mongoose.ObjectId,
        ref: 'Event',
      },
    album: [
        {
            originalPoster: {
                type: mongoose.ObjectId,
                ref: 'User',
                require: true
            },
            image: {
                type: String,
                require: true
            },
            reply: [
                {
                    whoReply: {
                        type: mongoose.ObjectId,
                        ref: 'User',
                        require: true
                    },   
                    content: {
                        type: String,
                        require: true
                    }
                }
            ]
        }]
},{
    collection: 'albums',
    minimize: true,
    versionKey: false
}).set('toJSON', {
    transform: (doc, ret) => {
        ret.id = doc._id;
        delete doc._id
    }
});

export default Schema;