const results = require('../Models/results')
const studentDetails = require('../Models/studentdetails')
const UploadResults = async(data) =>{
    try{
        const document = new results(data);
        await document.save()

        return {
            success: true,
            message: 'Document saved successfully',
        };
    }
    catch (e) {
        console.log(e);
        throw {
            success: false,
            message: 'Error saving document',
            error: e.message,
        };
    }
}

const UploadStudentDetails = async(data) =>{
    try{
        const document = new studentDetails(data);
        await document.save()
        return {
            success: true,
            message: 'Document saved successfully',
        };
    }
    catch (e) {
        console.log(e);
        throw {
            success: false,
            message: 'Error saving document',
            error: e.message,
        };
    }
}

module.exports = {UploadResults, UploadStudentDetails};