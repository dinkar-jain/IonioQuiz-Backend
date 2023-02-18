import Mongoose from "mongoose";

const userSchema = new Mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true, dropDups: true },
    password: { type: String, required: true },
    score: { type: String, default: null }
});

const usersModel = Mongoose.model("Users", userSchema)

const questionsSchema = new Mongoose.Schema({
    question: { type: String, required: true },
    options: [
        {
            option: { type: String, required: true },
            extra: { type: String, required: true }
        }
    ],
    answer: { type: String, required: true }
});

const questionsModel = Mongoose.model("Questions", questionsSchema);

export { usersModel, questionsModel };