const { Schema, model } = require('mongoose');

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
    project_reqs: {
        // how to define a field that is an array of strings?
    }
});

const Project = model('Project', projectSchema);

module.exports = Project;