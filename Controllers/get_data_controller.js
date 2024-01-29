const questionpaper = require('../Models/questionpaper')

const getQuestionPaper = async ()=>{
  try{
    return await questionpaper.find();
  }catch (err){
    console.error(`error querying data :${err}`)
    throw err;
  }
};

module.exports = getQuestionPaper;