const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3000;

//MongoDB Atlas connect
mongoose.connect('mongodb+srv://officialsabarinarayan:9447103050@cluster0.buyzcu4.mongodb.net/finalproject', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('Connected to MongoDB Atlas');
    // Once connected, call the function to update passwords
    })

.catch(err => console.error('Error connecting to MongoDB Atlas:', err));

// User schema
const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, required: true },
});

const User = mongoose.model('User', userSchema);

// Student Schema
const studentSchema=new mongoose.Schema({
  id: String,
  name: String,
  course: String,
  project: String,
  batch: String,
  status: String,
  placement: String,
})

const Student=mongoose.model('Studentdetail',studentSchema);

app.use(bodyParser.json());
app.use(cors());



// Login route
app.post('/login', (req, res) => {
  const { email, password } = req.body;

  
  User.findOne({ email })
    .then(user => {
      if (!user) {
        // User not found
        res.status(401).json({ message: 'Invalid credentials' });
      } else {
        // Compare the provided password with the stored hashed password
        bcrypt.compare(password, user.password)
          .then(isValid => {
            if (isValid) {
              // Password is correct, login successful
              res.json({ message: 'Login successful' });
            } else {
              // Password is incorrect
              res.status(401).json({ message: 'Invalid credentials' });
            }
          })
          .catch(err => {
            console.error('Error comparing passwords:', err);
            res.status(500).json({ message: 'Internal server error' });
          });
      }
    })
    .catch(err => {
      console.error('Error finding user:', err);
      res.status(500).json({ message: 'Internal server error' });
    });
});

// student crud operations
// Add
app.post('/addstuds',(req,res)=>{
  console.log(req.body);
  const newStudent=new Student({
    id:req.body.id,
    name:req.body.name,
    course:req.body.course,
    project:req.body.project,
    batch:req.body.batch,
    status:req.body.status,
    placement:req.body.placement
  });
  newStudent.save()
    .then(()=>{
      res.status(200).json({message:'Student Detail Added'});
    })
    .catch((error)=>{
      res.status(500).json({error:'Failed to Add detail'});
    })
})

// view all
app.get('/viewstud',(req,res)=>{
  Student.find()
  .then((students)=>{
    res.status(200).json(students);
  })
  .catch((error)=>{
    res.status(500).json({error:'Failed to Fetch'});
  })
});

// getone
app.get('/getone/:_id', async (req, res) => {
  try {
    const student = await Student.findById(req.params._id);
    res.status(200).json(student);
  } catch (error) {
    console.log(error);
    res.status(500).send('Error retrieving data');
  }
});

// edit data
app.put('/editstuds/:_id', async (req, res) => {
  try {
      let id = req.params._id
      let updateData = {$set: req.body}
      const updated = await Student.findByIdAndUpdate(id, updateData,{ new: true })
      res.json(updated)
  } catch (error) {
      console.log(error)
      res.send('error')
  }
})

// delete data
app.delete('/deleteitem/:_id',(req, res) => {
  Student.findByIdAndRemove(req.params._id)
  .then((student)=>{
    if (student){
      res.status(200).json({message:'Student deleted successfully'});
    }else{
      res.status(404).json({error:'Student not found'});
    }
  })
  .catch((error)=>{
    res.status(500).json({error:'Failed to delete Student'});
  });
});


// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
