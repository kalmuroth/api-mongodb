import mongoose from 'mongoose';

const Schema = new mongoose.Schema({
    event_id: {
        type: mongoose.ObjectId,
        ref: 'Event',
    },
    survey: [
        {
            subject: {
                type: String,
                require: true
            },
            surveyPoster: {
                type: mongoose.ObjectId,
                ref: 'User',
                require: true
            },
            questions: [
                {
                    subject: {
                        type: String,
                        require: true
                    },
                    responses: [
                        {
                            option: {
                                type: String,
                                require: true
                            },
                        }
                    ],
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
                }
            ],
        }]
},{
    collection: 'surveys',
    minimize: true,
    versionKey: false
}).set('toJSON', {
    transform: (doc, ret) => {
        ret.id = doc._id;
        delete doc._id
    }
});

export default Schema;