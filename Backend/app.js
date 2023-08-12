const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const PORT = 3000;
app.use(bodyParser.json());
app.use(cors());
const db = require("../Backend/db/index");
const api=require("../Backend/router/router");
app.use('/',api);
// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});