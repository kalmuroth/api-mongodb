import mongoose from 'mongoose';

const questionSchema = new mongoose.Schema({
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
    ]
});

const baseSchema = new mongoose.Schema({
    event: {
        type: mongoose.Types.ObjectId,
        ref: 'Event',
        required: true
    },
    survey: [
        {
            surveyPoster: {
                type: mongoose.ObjectId,
                ref: 'User',
                require: true
            },
            questions: [questionSchema],
        }],
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

export default baseSchema;