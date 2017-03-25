import {Schema} from 'mongoose';

export default new Schema({
    creationDate: Date,
    subject: String,
    description: String,
    rating: Number,
    answersCount: Number,
    isAnswered: Boolean
});
