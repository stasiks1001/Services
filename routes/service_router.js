const express = require('express')
const router = express.Router()

const{
    getAllServices,
    getService,
    createService,
    deleteService,
    updateService,
    // findService,
}= require('../controllers/services')



router.post('/add',createService)
// router.get('/find',findService)  // just for testing purposes

router.get('/getall',getAllServices)
router.get('/getone',getService)
router.post('/delete/:id',deleteService)
router.patch('/update/:id',updateService)

module.exports = router;