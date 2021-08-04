const sequelize = require("../config/connection");
const db = require("../models");

const plantSeeds = async () => {
  await sequelize.sync({ force: true });
  await db.User.bulkCreate([
    {
      username: "lsoth",
      email: "leone.soth.gmail",
      password: "password"
    },
    {
      username: "user2",
      email: "user2@user.com",
      password: "password2"
    },
    {
      username: "user3",
      email: "user3@user.com",
      password: "password3"
    }
  ]);

  await db.BlogPost.bulkCreate([
      {
          content:"Hi this is my first blog post!",
          UserId:1
      },
      {
          content:"Test Post",
          UserId:2
      },
      {
          content:"Hi I am new here",
          UserId:3
      },
    ]);
    console.log('seeds planted!');
    process.exit(0);
};

plantSeeds()