const { Schema, model } = require('mongoose');

const projectSchema = new Schema({
    title: {
        type: String,
        require: true
    },
    intro: {
        type: String,
    },
    budget_description: {
        type: String
    },
    project_description: {
        type: String,
        require: true
    },
    submission_deadline: {
        type: Date,
    },
    project_reqs: [ 
        {
            type: String,
            require: true
        } 
    ],
    brief_reqs: [ 
        {
            type: String,
            require: true
        } 
    ],
    image_url: String,
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
      },
    // Store all of the associated child briefs in an array
    briefs: [
        {
          type: Schema.Types.ObjectId,
          ref: 'Brief',
        },
      ],
});

const Project = model('Project', projectSchema);

module.exports = Project;