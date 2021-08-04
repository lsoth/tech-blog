const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class BlogPost extends Model {}

BlogPost.init({
    description:{
        type:DataTypes.TEXT
    }
},{sequelize})

module.exports = BlogPost