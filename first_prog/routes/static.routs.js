const express = require('express');
const router = require('express').Router();
const path = require('path');

console.log(path.join(path.dirname(__dirname),"x", "y", "z"));
// static routs for static files from images
router.use('/images', express.static(path.join(path.dirname(__dirname),"images")));

module.exports = router;