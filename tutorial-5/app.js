const express = require('express');
const fs = require('fs');
const users = require('./users');
const app = express();
app.use(express.json());

function updateUser(data) {
  fs.writeFile('./users.json', JSON.stringify(data), function(err) {
    if (err) throw err;
   
  });
}
// getting all users
app.get('/users', function(req, res) {
  res.json({ message: "Users retrieved", 
  success: true, 
  users: users });
});

// adding new user
app.post('/add', function(req, res) {
  let email = req.body.email;
  let firstName = req.body.firstName;
  if (!email || !firstName) {
    return res.status(400).json({ message: "Email and firstName are required", 
    success: false });
  }
  let newUser = { email: email, firstName: firstName, id: Date.now().toString() };
  users.push(newUser);
  updateUser(users);
  res.json({ message: "User added", 
  success: true });
});

// updating already existing users
app.put('/update/:id', function(req, res) {
  let id = req.params.id;
  let email = req.body.email;
  let firstName = req.body.firstName;
  if (!email && !firstName) {
    return res.status(400).json({
    message: "Email or firstName is required for update", 
    success: false });
  }
  let userIndex = users.findIndex(function(user) { return user.id === id; });
  if (userIndex !== -1) {
    if (email) users[userIndex].email = email;
    if (firstName) users[userIndex].firstName = firstName;
    updateUser(users);
    res.json({ 
    message: "User updated", 
    success: true });
  } else {
    res.status(404).json({ 
      message: "User not found", 
      success: false });
  }
});
// getting the specific user
app.get('/user/:id', function(req, res) {
  var id = req.params.id;
  var user = users.find(function(user) { return user.id === id; });
  if (user) {
    res.json({ success: true, user: user });
  } else {
    res.status(404).json({ message: "User not found", success: false });
  }
});

app.use(function(err, res) {
  console.error(err.stack);
  res.status(500).json({ message: 'Server Error'});
});

module.exports = app;
