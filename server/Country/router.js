const express = require('express')
const router = express.Router();
const writeDataCountry = require('./seed')
const {getAllCountries} = require('./controller')
console.log(getAllCountries);
router.get('/api/country', getAllCountries)
writeDataCountry()

module.exports = router