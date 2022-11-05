const { Schema, model } = require('mongoose');

const brief_contentSchema = new Schema({
    names: [
        {
            type: String,
            require: true
        }
        ],
    content: [
        {
            type: String,
            require: true
        }
        ],
});

const briefSchema = new Schema({
    // do we need this id field? How can it be genereated automatically
    title: {
        type: String,
        required: true
    },
    brief_content: brief_contentSchema,
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
    project: {
        type: Schema.Types.ObjectId,
        ref: 'Project',
    },
});

const Brief = model('Brief', briefSchema);

module.exports = Brief;