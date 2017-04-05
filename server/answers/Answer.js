import mongoose, {Schema} from 'mongoose';

const answerSchema = new Schema({
    problemId: String,
    creationDate: Date,
    userName: String,
    description: String,
    rating: Number
});

export default mongoose.model('answer', answerSchema);
