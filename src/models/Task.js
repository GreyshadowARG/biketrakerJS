// config la forma en la que se van a guardar los datos en la bd
import {Schema, model} from 'mongoose';

const taskSchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    description: {
        type: String,
        required: true,
    },
    done: {
        type: Boolean,
        default: false,
    },
},{
    timestamps: true,
    versionKey: false,
})

export default model("Task", taskSchema);