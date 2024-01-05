const express = require('express');
const { Patient, Doctor, AdminL, Report } = require("./mongo");
const cors = require('cors');
const app = express();
const {MongoClient} = require('mongodb');
const multer=require('multer');

const storage = multer.memoryStorage();
const upload = multer({storage: storage});
// Set up PayPal sandbox environment
const stripe = require('stripe')('sk_test_tR3PYbcVNZZ796tH88S4VQ2u');
app.use(express.static('public'));

app.use(express.json());
app.use(cors());

app.get("/", cors(), (req, res) => {
  // Handle the default route if needed
});

const uri = 'mongodb://localhost:27017';
const clients = new MongoClient(uri);

app.post('/bookAppointment', async (req, res) => {
  const {
    name,
    email,
    appointmentDate,
    mobileNumber,
    problemDiagnosed,
    paymentMethod,
    cardNumber,
    expiryDate,
    cvv,
  } = req.body;

  try {
    // Your appointment booking logic here...

    // Payment processing using Stripe
    if (paymentMethod === 'creditCard' || paymentMethod === 'debitCard') {
      const paymentIntent = await stripe.paymentIntents.create({
        amount: 10000, // Amount in cents (e.g., $100.00)
        currency: 'usd',
        payment_method_data: {
          type: 'card',
          card: {
            number: cardNumber,
            exp_month: expiryDate.month,
            exp_year: expiryDate.year,
            cvc: cvv,
          },
        },
        description: 'Appointment Payment',
        metadata: {
          appointment_date: appointmentDate,
          appointment_problem: problemDiagnosed,
          // Add more metadata as needed
        },
      });

      // Process the payment and handle success
      // For example, if payment is successful, complete appointment booking
      // and send 'success' response
      // Your appointment booking logic...

      res.json('success'); // Return success response after successful appointment booking and payment
    } else {
      res.status(400).json('Invalid payment method');
    }
  } catch (error) {
    console.error('Error booking appointment:', error);
    res.status(500).json('Error booking appointment');
  }
});


// Endpoint for handling patient login
app.post('/patient/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await Patient.findOne({ email, password });

    if (user) {
      res.json('exist');
    } else {
      res.json('notexist');
    }
  } catch (error) {
    res.status(500).json('fail');
  }
});

// Endpoint for patient signup
app.post('/patient/signup', async (req, res) => {
  const {
    firstname,
    surname,
    username,
    gender,
    problemDiagnosed,
    mobileNumber,
    country,
    email,
    password,
    confirmPassword,
  } = req.body;

  const data = {
    firstname,
    surname,
    username,
    gender,
    problemDiagnosed,
    mobileNumber,
    country,
    email,
    password,
    confirmPassword,
  };

  try {
    const check = await Patient.findOne({ email });

    if (check) {
      res.json('exists');
    } else {
      await Patient.create(data);
      res.json('created');
    }
  } catch (e) {
    res.json('fail');
  }
});

// Endpoint for doctor signup
app.post('/doctor/signup', async (req, res) => {
  // Add your doctor signup logic here using the Doctor model
  const {
    firstname,
    surname,
    username,
    id,
    gender,
    expertise,
    mobileNumber,
    country,
    email,
    password,
    confirmPassword,
  } = req.body;

  const info={
    firstname,
    surname,
    username,
    id,
    gender,
    expertise,
    mobileNumber,
    country,
    email,
    password,
    confirmPassword,
  }

  try {
    // Hash the password before saving
    const check=await Doctor.findOne({  email  });

    if(check){
      res.json('exits')
    }else {
      await Doctor.create(info);
      res.json('created');
    }


  } catch (e) {
    res.json('fail');
  }
});

// Endpoint for doctor login
app.post('/doctor/login', async (req, res) => {
  // Add your doctor login logic here using the Doctor model
  const { email, password,id } = req.body;

  try {
    const doc = await Doctor.findOne({ email, password,id });

    if (doc) {
      // User found, return success or any specific data
      res.json('exist');
    } else {
      // User not found or wrong credentials
      res.json('notexist');
    }
  } catch (error) {
    res.status(500).json('fail');
  }
});

// Endpoint for admin signup
app.post('/admin/signup', async (req, res) => {
  // Add your admin signup logic here using the AdminL model
  const {
    firstname,
    surname,
    username,
    id,
    gender,
    email,
    password,
    confirmPassword,
  } = req.body;

  const info={
    firstname,
    surname,
    username,
    id,
    gender,
    email,
    password,
    confirmPassword,
  }

  try {
    // Hash the password before saving
    const check=await AdminL.findOne({email:email});

    if(check){
      res.json('exits')
    }else {
      await AdminL.create(info);
      res.json('created');
    }


  } catch (e) {
    res.json('fail');
  }
});

// Endpoint for admin login
app.post('/admin/login', async (req, res) => {
  // Add your admin login logic here using the AdminL model
  const { email, password,id } = req.body;

  try {
    const adm = await AdminL.findOne({ email});

    if (adm) {
      // User found, return success or any specific data
      res.json('exist');
    } else {
      // User not found or wrong credentials
      res.json('notexist');
    }
  } catch (error) {
    res.status(500).json('fail');
  }
});




// Endpoint to get all users
app.get('/getUsers', async (req, res) => {
  Doctor.find()
  .then(users=> res.json(users))
  .catch(err=>res.json(err))
});

app.get('/doctor/doctorProfile', async (req, res) => {
  Patient.find()
  .then(users=> res.json(users))
  .catch(err=>res.json(err))
});

app.post('/doctor/report', upload.single("files"), async (req, res) => {
  try {
    if (!req.file) {
      throw new Error('No file uploaded');
    }

    const {
      patient,
      doctor,
      age,
      gender,
      mobileNumber,
    } = req.body;

    const data = {
      patient,
      doctor,
      age,
      gender,
      mobileNumber,
      files: {
        data: req.file.buffer,
        contentType: req.file.mimetype,
      }
    };

    await Report.create(data);
    res.json('created');
    console.log("Created");
  } catch (e) {
    res.status(500).json('fail');
    console.log(e.message);
  }
});





const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
