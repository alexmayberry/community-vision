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

    // // await User.create(userSeeds);
    // // // Project <-> User
    // for (let i = 0; i < projectSeeds.length; i++) {
    //   const project = await Project.create(projectSeeds[i]);
    //   for (let x = 0; x < userSeeds.length; x++) {
    //     console.log(userSeeds[x]);
    //     for (let y = 0; y < userSeeds[x].projects.length; y++) {
    //       if (userSeeds[x].projects[y] === projectSeeds[i].id) {
    //         console.log(projectSeeds[i].id, userSeeds[x].username);
    //         // update the user.projects with project id
    //         const { _id } = User.findOneAndUpdate(
    //           { username: userSeeds[x].username },
    //           { $addToSet: { 
    //             projects: project._id
    //           }},
    //           )
    //           // find the user and store thier info
    //           // this is becuase i can't figure out how to get the object info out of findOneAndUpdate lol
    //           const userX = User.findOne(
    //             { username: userSeeds[x].username }
    //             )
    //             console.log(userX);
    //         // update the project.user with userid
    //         const updatedProject = Project.findOneAndUpdate(
    //           {_id: project._id},
    //           { $set: {
    //             user: userX._id
    //           }}
    //         )
    //         // const projectX = Project.findOne(
    //         //   {_id: project._id}
    //         //   )
    //         //   console.log(projectX);
    //       }
    //     }
    //   }
    //   // // set user for projects
    // // for projectSeed.length
    // // $set user: userSeed[4]._id
    // //
    // // // set projects for user
    // // for projects.length 
    // // find userSeed[4]
    // // $addToSet projects: project._id
    // // // Project <-> Brief
    // // // set briefs in project
    // // for projectSeed.length
    // // for briefSeed.length
    // // for briefSeed[i].briefs
    // // if briefSeed[i].briefs[i] = briefId
    //   // in brief[i] $addToSet briefs: briefId
    //   // in project[i] $addToSet project: projectId
    // }


    // loop through users
    for ( let i = 0; i < userSeeds.length; i++ ) {
      
      // for each, make a User
      const user = await User.create(userSeeds[i]);
      console.log(user);

      // loop through each user projects array
      for ( let x = 0; x < userSeeds[i].projects.length; x++ ) {
        
        // loop through each poject
        for ( let y = 0; y < projectSeeds.length; y++ ) {
          
          // compare projectId with project Id in User.projects
          if ( projectSeeds[y].id === userSeeds[i].projects[x] ) {

            // create a project if they match
            // console.log(projectSeeds[y].id, userSeeds[i].projects[x]);
            const project = await Project.create(projectSeeds[y]);
            console.log(project);

            // update the db user projects array with the project array
            await User.findOneAndUpdate(
              { _id: user._id },
              { $addToSet: {
                projects: project._id
              }}
            )

            // loop through each project briefs array
            for ( let a = 0; a < projectSeeds[y].briefs.length; a++ ) {
              console.log(`starting project.briefsLoop a= ${a}`)
              //if ( projectSeeds[y].briefs[a] ) {
                
                // loop through the briefs
                for ( let b = 0; b < briefSeeds.length; b++ ) {
                  
                  // if the brief id matches the id in the project briefs array
                  if ( briefSeeds[b].id === projectSeeds[y].briefs[a]) {
                    
                    // console.log(briefSeeds[b].project, projectSeeds[y].id);
                    // create a new brief
                    const brief = await Brief.create( briefSeeds[a] );
                    console.log(brief);
                    // update the user briefs array with brief db id
                    await User.findOneAndUpdate(
                      { _id: user._id },
                      { $addToSet: {
                        briefs: brief._id
                      }}
                    )

                    // monogo actually picks up on these hardcoded associatations so this isn't needed
                    // update the project briefs array with brief db id
                    await Project.findOneAndUpdate(
                      { _id: project._id },
                      { $addToSet: {
                        briefs: brief._id
                      }}
                    )

                  //  console.log(project)
                  //  console.log(user)
                  //  console.log(brief)
                  }
                }

            }
          }
        }
      }
    } 
      
    } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('all done!');
  process.exit(0);
});
