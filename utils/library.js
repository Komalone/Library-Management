const Sequelize=require('sequelize')

const sequelize=new Sequelize('library','root','Kom@l111',{
    dialect:'mysql',
    host:'localhost'
})

module.exports=sequelize