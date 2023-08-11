const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser');
const cors = require('cors');
const jwt = require ('jsonwebtoken');
const csvtojson=require("csvtojson");
const multer=require('multer');
const storage=multer.memoryStorage();
const upload=multer({storage:storage});

const app = express();
const PORT = 3000;

//MongoDB Atlas connect
mongoose.connect('mongodb+srv://officialsabarinarayan:9447103050@cluster0.buyzcu4.mongodb.net/finalproject', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('Connected to MongoDB Atlas');
    })

.catch(err => console.error('Error connecting to MongoDB Atlas:', err));

// User schema
const userSchema = new mongoose.Schema({
  name : String,
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

// Message Schema
const notificationSchema=new mongoose.Schema({
  notificationmess:String
})
const Noti=mongoose.model('Notification',notificationSchema);

app.use(bodyParser.json());
app.use(cors());

// Csv file upload
app.post('/addcsv',upload.single('csvFile'),async(req,res)=>{
  const csvData=req.file.buffer.toString('utf-8');
  csvtojson()
    .fromString(csvData)
    .then(csvData=>{
      console.log(csvData);
      Student.insertMany(csvData)
        .then(function(){
          console.log("Data Inserted")
          res.json({success:'Data Uploaded'});
      }).catch(function(error){
          console.log(error);
          res.status(500).json({error: 'Error Uploading'})
      });
    });
});

// Notification operations
// Add
app.post('/addmess', (req,res)=>{
  console.log(req.body);
  const newNoti=new Noti({
    notificationmess:req.body.notificationmess
  });
  newNoti.save()
    .then(()=>{
      res.status(200).json({message:'Message Added'});
    })
    .catch((error)=>{
      res.status(500).json({error:'Failed to Add Message'});
    })
})

// View 
app.get('/viewmess',(req,res)=>{
  Noti.find()
  .then((notification)=>{
    res.status(200).json(notification);
  })
  .catch((error)=>{
    res.status(500).json({error:'Failed to Fetch'});
  })
});

// Delete
app.delete('/deletemess/:_id',(req, res) => {
  Noti.findByIdAndRemove(req.params._id)
  .then((notification)=>{
    if (notification){
      res.status(200).json({message:'Message deleted successfully'});
    }else{
      res.status(404).json({error:'Message not found'});
    }
  })
  .catch((error)=>{
    res.status(500).json({error:'Failed to delete Message'});
  });
});

// Login route
app.post('/login', (req, res) => {
  const { email, password } = req.body;
  User.findOne({ email })
    .then(user => {
      if (!user) {
        res.status(401).json({ message: 'Invalid credentials' });
      } else {
        bcrypt.compare(password, user.password)
          .then(isValid => {
            if (isValid) {
              const token = jwt.sign({ userId: user._id, role: user.role }, '12345', { expiresIn: '1h' });
              res.json({ message: 'Login successful', token });
            } else {
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

// User CRUD operations =>
// Add
app.post('/api/users', async (req, res) => {
  try {
    const { name, email, password, role } = req.body;
    // Hash the password before saving it to the database
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ name, email, password: hashedPassword, role });
    await user.save();
    res.status(201).json({ message: 'User created successfully', user });
  } catch (error) {
    res.status(500).json({ message: 'Error creating user', error: error.message });
  }
});

// Gell all
app.get('/api/users', async (req, res) => {
  try {
    const users = await User.find({}, '-password'); // Exclude the password field from the response
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching users', error: error.message });
  }
});

// Getone
app.get('/api/users/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching user', error: error.message });
  }
});

// edit
app.put('/api/users/:id', async (req, res) => {
  try {
    const { name, email, password, role } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      { name , email, password: hashedPassword, role },
      { new: true }
    );
    res.status(200).json({ message: 'User updated successfully', user: updatedUser });
  } catch (error) {
    res.status(500).json({ message: 'Error updating user', error: error.message });
  }
});

// delete
app.delete('/api/users/:id', async (req, res) => {
  try {
    await User.findByIdAndRemove(req.params.id);
    res.status(200).json({ message: 'User deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting user', error: error.message });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});