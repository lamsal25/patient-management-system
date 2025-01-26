const { createPatient, readPatient, deletePatient, updatePatient, allRecords } = require('../controller/patientController')

const router = require('express').Router()

router.route('/api/patients').post(createPatient)

router.route('/api/read/:id').post(readPatient)

router.route('/api/delete/:id').delete(deletePatient)

router.route('/api/update/:id').put(updatePatient)

router.route("/api/allRecord").post(allRecords)

module.exports = router