const express =require('express')
const {getQuestionPaper , getExamDetails} = require('../Controllers/get_data_controller')
const {UploadResults,UploadStudentDetails} = require('../Controllers/post_data_controller')
const mongoose =require('mongoose')
const {response, request} = require("express");

const router =express.Router()

router.get('/QuestionPaper',async(request, response)=>{
        try{
            const data = await getQuestionPaper();
            response.json(data)
        }catch (err) {
            response.status(500).send('Internal Server Error');
            throw err;
        }
})

router.get('/examDetails',async(request, response)=>{
    try{
        const data = await getExamDetails();
        response.json(data)
    }catch (err) {
        response.status(500).send('Internal Server Error');
        throw err;
    }
})

router.post('/upload-results', async (request,response)=>{
    try{
        const {name,score} = request.body;
        const data = {name,score}
        const resp = await UploadResults(data)
        response.json(resp)
    }catch (err) {
        response.status(500).send('Internal Server Error');
        throw err;
    }
})

router.post('/upload-student-details', async (request,response)=>{
    try{
        const {username,password,email} = request.body;
        const data = {username,password,email}
        const resp = await UploadStudentDetails(data)
        response.json(resp)
    }catch (err) {
        response.status(500).send('Internal Server Error');
        throw err;
    }
})




module.exports = router;