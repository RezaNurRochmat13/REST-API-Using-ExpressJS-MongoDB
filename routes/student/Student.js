const express = require('express');
const studentModel = require('../../model/student/Student');
const router = express.Router();

router.get('/students', (request, response) => {
    try {
        studentModel.find({}, (_error, students) => {
            response.status(200).json({
                status: 200,
                data: students
            })});
    } catch (error) {
        console.error(error.message);
        response.status(500).send({error: 'Internal Server Error. Check log more info'});
    }
});

router.get('/student/:id', (request, response) => {
    const _id = request.params.id;
    try {
        studentModel.findById({"_id": _id}, (_, student) => {
            if (student == null) {
                response.json({data: []});
            } else {
            response.json({data: student})
            }
        });
    } catch (error) {
        console.error(error.message);
        response.status(500).json({message: 'Internal Server Error. Check Logs More Info'});
    }
});

router.post('/student', async (request, response) => {
    const student = new studentModel({
        name: request.body.name,
        age: request.body.age,
        address: request.body.address
    });
    try {
        const newStudentEntry = student.save();
        response.status(201).json({
            status: 'success',
            message: 'Inserted Student',
            data: newStudentEntry
        });
    } catch (error) {
        console.error(error.message);
        response.status(400).json({
            status: 'false',
            message: 'Error Occured. Check logs more info'
        });
    }
});

router.put('student/:id', (request, response) => {
    response.status(200).send('Update Student');
});

router.delete('student/:id', (request, response) => {
    response.status(200).send('Delete Student');
});

module.exports = router