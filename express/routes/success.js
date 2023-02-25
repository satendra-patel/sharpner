const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

// /admin/add-product => GET
router.post('/success', (req, res, next) => {
    console.log(req.body);
  res.sendFile(path.join(rootDir, 'views', 'success.html'));
});

// /admin/add-product => POST


module.exports = router;