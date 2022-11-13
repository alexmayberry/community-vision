const { Schema, model } = require('mongoose');

const briefSchema = new Schema({
    title: {
        type: String,
    },
    brief_content: [ 
        {
            type: String,
            require: true
        } 
    ],
    image_url: String,
    date_created: {
        type: Date,
        default: Date.now,
    },
    // store the author's user information as embedded
    // user: {
    //       type: Schema.Types.ObjectId,
    //       ref: 'User',
    // },
    project: {
        type: Schema.Types.ObjectId,
        ref: 'Project',
    },
});

const Brief = model('Brief', briefSchema);

module.exports = Brief;