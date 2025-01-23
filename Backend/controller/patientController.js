const { medicalHistories, patients } = require('../models/database');

// cretae patient data ///// 
exports.createPatient =  async (req, res) => {
  console.log("Patient details: ", req.body)
  try {
    const { name, email, age, sex, address } = req.body
    const medical = req.body.medicalHistories
    console.log("medical: ", medical)

    console.log(address, email)

    // Access the medical histories
    medical.forEach((history, index) => {
      console.log(`Medical History ${index + 1}:`);
      console.log(`  Condition: ${history.condition}`);
      console.log(`  Medicines: ${history.medicines}`);
      console.log(`  Date: ${history.date}`);
    });
    // Save the data to the database (example: Sequelize ORM)
    const patient = await patients.create({
      name,
      email,
      age,
      sex,
      address,
    });

    //save in the databse:
    // Save medical histories for the patient
    const histories = medical.map((history) => ({
      ...history, patientId: patient.id, // Foreign key reference
    }));
    await medicalHistories.bulkCreate(histories);

  } catch (error) {
    console.log("error aayo ta k vo", error)
  }


  res.status(200).json({ message: "User created" })
}



// read the data from database
exports.readPatient = async (req, res) => {
  try {
    const patid = req.params.id;
    console.log(patid)
    const pat = await patients.findOne({
      where: { id: patid }
      , include: [{ model: medicalHistories, as: 'medicalHistory' }], // Alias matches `as` in the association
    });
    console.log(pat)

    // const med = await medicalHistories.findOne({
    //     where: { patientId: patid }
    // })
    // console.log(med)

    if (!pat) {
      return res.status(404).json({ error: 'Patient not found' });
    }
    res.status(200).json(pat);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Failed to fetch patient data' });
  }
}



/// Delete data ///
exports.deletePatient =  async (req, res) => {
  console.log(req.params.id)
  const data = req.params.id
  console.log("Delete data: ", data)

  try {
    await patients.destroy({
      where: { id: data }, // Specify the patient ID to delete
    });
    res.status(200).json({ message: "Delete Successful" })
  } catch (error) {
    console.log("Error", error)
  }
}



// edit data //
exports.updatePatient =  async (req, res) => {
    const ID = req.params.id;
    const { name, email, age, sex, address } = req.body;
    const medical = req.body.medicalHistories
    console.log("Received update data:", req.body);
    console.log("medical history: ", medical)
    try {
      // First update patient data
      const updatedPatient = await patients.update({
        name,
        email,
        age,
        sex,
        address
      }, {
        where: { id: ID }
      });
  
      // Handle medical histories updates
      if (medical && medical.length > 0) {
        for (const history of medical) {
          if (history.id) {
            // Update existing medical history
            await medicalHistories.update({
              condition: history.condition,
              medicines: history.medicines,
              date: history.date
            }, {
              where: {
                id: history.id,
                patientId: ID
              }
            });
            
          } else {
            // Create new medical history
            await medicalHistories.create({
              patientId: ID,
              condition: history.condition,
              medicines: history.medicines,
              date: history.date
              
            });
            console.log("new patient table created")
          }
        }
      }
  
      // Fetch the updated data using the same structure as your working read endpoint
      const updatedData = await patients.findOne({
        where: { id: ID },
        include: [{
          model: medicalHistories,
          as: 'medicalHistory'
        }]
      });
      console.log("updated data", updatedData)
      res.status(200).json({
        message: "Update successful",
        data: updatedData
      });
  
    } catch (error) {
      console.error("Error updating:", error);
      res.status(500).json({
        message: "Server error",
        error: error.message
      });
    }
  }
  