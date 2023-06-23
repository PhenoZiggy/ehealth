import mongoose from 'mongoose';
const { Schema } = mongoose;
const medicalSchema = new Schema(
  {
    medicine: {
      type: String,
      required: true,
    },
    doctor: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
      },
      patient: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
      },
    amount: {
      type: Number,
    },
    date: {
      type: Date,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model('Medical', medicalSchema);