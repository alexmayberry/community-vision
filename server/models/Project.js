const { Schema, model } = require('mongoose');

const input_reqsSchema = new Schema({
    names: [ String ],
    descriptions: [ String ],
});

const projectSchema = new Schema({
    title: {
        type: String,
        require: true
    },
    intro: {
        type: String
    },
    budget_description: {
        type: String
    },
    project_description: {
        type: String
    },
    submission_deadline: {
        type: Date,
        require: false
    },
    project_reqs: [ String ],
    input_reqs: input_reqsSchema,
    image_urls: [ String ],
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
      },
    // Store all of the associated child inputs in an array
    inputs: [
        {
          type: Schema.Types.ObjectId,
          ref: 'Input',
        },
      ],
});

const Project = model('Project', projectSchema);

module.exports = Project;