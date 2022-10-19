const router = require('express').Router();
const path = require('path');

  router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../Develop/public/notes.html'));
  });

  // If no matching route is found default to home
  router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../Develop/public/index.html'));
  });

  //export the router object
  module.exports = router;