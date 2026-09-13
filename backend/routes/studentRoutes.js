const express = require('express');
const router = express.Router();
const { getStudentInfo } = require('../controllers/studentController');

router.get('/', getStudentInfo);

module.exports = router;
