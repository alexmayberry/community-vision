const { AuthenticationError } = require('apollo-server-express');
const { User, Brief, Project } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async () => {
      return User.find()
        .select("-password")
        .populate('briefs')
        .populate('projects');
    },
    user: async (parent, { username }) => {
      return User.findOne({ username })
        .select("-password")
        .populate('briefs')
        .populate('projects');
    },
    me: async (parent, args, context) => {
      if (!context.user) {
        throw new AuthenticationError('You need to be logged in!');
      }

      return User.findOne({ _id: context.user._id })
              .select("-password")
              .populate('briefs');
    },
    briefs: async () => {
      return await Brief.find({})
      // .populate('user')
      .populate('project');
    },
    brief: async (parent, args, context) => {
      return await Brief.findById( { _id: args.briefId } )
      // .populate('user')
      .populate('project');
    },
    projects: async (parent, args, context) => {
      return await Project.find({})
        .populate('user')
        .populate('briefs');
    },
    project: async (parent, args, context) => {
      return await Project.findOne( { _id: args.projectId } )
        .populate('user')
        .populate('briefs');
    }
  },

  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password })
      // .select("-password");
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('No user found with this email address');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    },
    removeUser: async (parent, args , context) => {

      const user = await User.findOneAndRemove(
        { _id: context.user._id },
      );

      return user;
    },
    // { entry } from args and { user } from context
    addProject: async (parent, { entry }, { user }) => {

      if(!user) {
        throw new AuthenticationError('Must be logged in to create Brief entries');
      }

      const project = await Project.create(
        { ...entry, user: user }, 
        );

      await User.findOneAndUpdate(
        { _id: user._id }, 
        { $addToSet: { projects: project._id } }
        );

      return project;
    },
    removeProject: async (parent, { projectId }, { user }) => {
      const project = await Project.findOneAndRemove(
        { _id: projectId },
      );

      await User.findOneAndUpdate(
        { _id: user._id }, 
        { $pull: { projects: project._id } }
        );

      return project;
    },
    addBrief: async (parent, { entry }, { user }) => {

      if(!user) {
        throw new AuthenticationError('Must be logged in to create Brief entries');
      }

      const brief = await Brief.create(
        { ...entry, 
        //  user: user 
        }, 
        // { $addToSet: { user: user } }
        );
      console.log(user);

       await Project.findOneAndUpdate(
        { _id: entry.project },
        { $addToSet: { briefs: brief._id }}
        );

      await User.findOneAndUpdate(
        { _id: user._id }, 
        { $addToSet: { briefs: brief._id } }
        );

      return brief;

    },
    removeBrief: async (parent, { briefId }, { user }) => {

      // An incomplete DIY onDelete Cascade
      // const copyProjects () => {
      // // copy the projects array and remove the brief from those projects
      // };
      // const briefStuff = await Brief.findOne(
      //   { _id: briefId },
      //   {  }
      // );
      // await Project.findOneAndUpdate(
      // { _id: user._id }, 
      // { $pull: { briefs: briefId } }
      // );

      const brief = await Brief.findOneAndRemove(
        { _id: briefId },
      );

      await User.findOneAndUpdate(
        { _id: user._id }, 
        { $pull: { briefs: briefId } }
        );

      return brief;
    },
  },
};

module.exports = resolvers;
