const { AuthenticationError } = require('apollo-server-express');
const { User, Brief, Project } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    // users: async () => {
    //   return User.find().select("-password");
    // },
    user: async (parent, { username }) => {
      return User.findOne({ username }).select("-password");
    },
    me: async (parent, args, context) => {
      if (!context.user) {
        throw new AuthenticationError('You need to be logged in!');
      }

      return User.findOne({ _id: context.user._id })
              .select("-password")
              .populate('brief');
    },
    briefs: async () => {
      return await Brief.find({})
      .populate('user')
      .populate('project');
    },
    brief: async (parent, args, context) => {
      return await Brief.findById( args.id )
      .populate('user')
      .populate('project');
    },
    project: async (parent, args, context) => {
      return await Project.find({})
        .populate('user')
        .populate('brief')
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
    // { entry } from args and { user } from context
    addProject: async (parent, { entry }, { user }) => {

      if(!user) {
        throw new AuthenticationError('Must be logged in to create Brief entries');
      }

      const project = await Project.create({ ...entry });

      await User.findOneAndUpdate({ _id: user._id }, { $addToSet: { Project: project._id } });

      return project;

    }
  },
};

module.exports = resolvers;
