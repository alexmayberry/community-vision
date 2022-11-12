const db = require('../config/connection');
const { User, Project, Brief } = require('../models');
const userSeeds = require('./userSeeds.json');
const projectSeeds = require('./projectSeeds.json');
const briefSeeds = require('./briefSeeds.json');

db.once('open', async () => {
  try {
    await Brief.deleteMany({});
    await Project.deleteMany({});
    await User.deleteMany({});
    
    await User.create(userSeeds);
    await Project.create(projectSeeds);
    await Brief.create(briefSeeds);

    // for (let i = 0; i < thoughtSeeds.length; i++) {
    //   const { _id, thoughtAuthor } = await Thought.create(thoughtSeeds[i]);
    //   const user = await User.findOneAndUpdate(
    //     { username: thoughtAuthor },
    //     {
    //       $addToSet: {
    //         thoughts: _id,
    //       },
    //     }
    //   );
    // }

    // // Project <-> User

    // // set user for projects
    // for projectSeed.length
    // $set user: userSeed[4]._id
    //
    // // set projects for user
    // for projects.length 
    // find userSeed[4]
    // $addToSet projects: project._id

    // // Project <-> Brief
  
    // // set set briefs in project
    // if 

  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('all done!');
  process.exit(0);
});
