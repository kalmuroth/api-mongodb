import mongoose from 'mongoose';

const purchaseSchema = new mongoose.Schema({
    ticket: {
        type: mongoose.ObjectId
    },
    contact: [{
        type: {
            type: mongoose.Types.ObjectId,
            required: true
        },
        firstname: {
            type: String,
            require: true
        },
        lastname: {
            type: String,
            require: true
        },
        address: {
            type: String,
            require: true
        },
        date: {
            type: Date,
            default: Date.now
        }
    }],
});

const baseSchema = new mongoose.Schema({
  event: {
    type: mongoose.Types.ObjectId,
    ref: 'Event',
    required: true
  },
  tickets: [
    {
      name: {
        type: String,
        require: true
      },
      price: {
        type: Number,
        require: true

      },
      quantity: {
        type: Number,
        require: true
      }
    }
  ],
  purchases: [purchaseSchema],
}, {
  collection: 'tickets',
  minimize: true,
  versionKey: false
}).set('toJSON', {
  transform: (doc, ret) => {
    ret.id = doc._id;
    delete ret._id;
  }
});

export default baseSchema;