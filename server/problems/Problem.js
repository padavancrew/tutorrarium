import mongoose, {Schema} from 'mongoose';

const problemSchema = new Schema({
    creationDate: Date,
    subject: String,
    description: String,
    rating: Number,
    answersCount: Number,
    isAnswered: Boolean
});

export default mongoose.model('problem', problemSchema);