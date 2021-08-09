import {Schema, model} from 'mongoose';

const videoSchema = new Schema({

    title: {
        type: String,
        require: true,
        trim: true

    },
    description: {
        type: String,
        require: true,
        trim: true
    },
    url: {
        type: String,
        require: true,
        trim: true
    }

}, {
    versionKey: false,
    timestamps: true

})

export default model("Video", videoSchema);