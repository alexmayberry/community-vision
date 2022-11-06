const { Schema, model } = require('mongoose');

const input_contentSchema = new Schema({
    names: [ String ],
    content: [ String ]
});

const inputSchema = new Schema({
    // do we need this id field? How can it be genereated automatically
    id: {
        type: ObjectId,
    },
    title: {
        type: String,
        required: true
    },
    input_content: input_contentSchema,
    image_urls: [ String ],
    date_created: {
        type: Date,
        default: Date.now,
    },
    // store the author's user information as embedded
    user: {
          type: Schema.Types.ObjectId,
          ref: 'User',
        },
});

const Input = model('Input', inputSchema);

module.exports = Input;