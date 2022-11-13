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
    
    // await User.create(userSeeds);
    // await Project.create(projectSeeds);
    // await Brief.create(briefSeeds);

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

    await User.create(userSeeds);

    // // Project <-> User
    for (let i = 0; i < projectSeeds.length; i++) {
      const project = await Project.create(projectSeeds[i]);
      // console.log(project);

      for (let x = 0; x < userSeeds.length; x++) {
        console.log(userSeeds[x]);
        for (let y = 0; y < userSeeds[x].projects.length; y++) {
          if (userSeeds[x].projects[y] === projectSeeds[i].id) {
            console.log(projectSeeds[i].id, userSeeds[x].username);
            const updatedUser = User.findOneAndUpdate(
              { username: userSeeds[x].username },
              { $addToSet: { 
                projects: project._id
              }}
            )
            console.log(project._id)
          //  console.log(updatedUser.projects);
          }

        }
      }
    }

    // // set user for projects
    // for projectSeed.length
    // $set user: userSeed[4]._id
    //
    // // set projects for user
    // for projects.length 
    // find userSeed[4]
    // $addToSet projects: project._id

    // // Project <-> Brief
  
    // // set briefs in project
    // for projectSeed.length
    // for briefSeed.length
    // for briefSeed[i].briefs
    // if briefSeed[i].briefs[i] = briefId
      // in brief[i] $addToSet briefs: briefId
      // in project[i] $addToSet project: projectId

  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('all done!');
  process.exit(0);
});
