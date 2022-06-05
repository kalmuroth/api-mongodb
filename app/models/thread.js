import mongoose from 'mongoose';

const Schema = new mongoose.Schema({
    group_id: {
        type: mongoose.ObjectId,
        ref: 'Group',
      },
    event_id: {
        type: mongoose.ObjectId,
        ref: 'Event',
      },
    messages: [
        {
            originalPoster: {
                type: mongoose.ObjectId,
                ref: 'User',
                require: true
              }
        }]
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