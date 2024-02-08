const questionPaper = require('../Models/questionpaper')
const examDetails = require('../Models/examdetails')

const getQuestionPaper = async ()=>{
  try{
    return await questionPaper.find();
  }catch (err){
    console.error(`error querying data :${err}`)
    throw err;
  }
};


const getExamDetails = async() =>{
  try {
    return await examDetails.find();
  }catch (err){
    console.error(`error querying data :${err}`)
    throw err;
  }
};

module.exports = {getQuestionPaper ,getExamDetails};