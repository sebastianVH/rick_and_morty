const getCharById = require('../controllers/getCharById')
const postFav = require("../controllers/postFav")
const login = require('../controllers/login')
const deleteFav = require("../controllers/deleteFav")

const {Router}= require('express')
const postUser = require('../controllers/postUser')

const router = Router()

router.get('/character/:id', getCharById)
router.post('/login',login)
router.post('/register',postUser)
router.post('/fav', postFav)
router.delete('/fav/:id',deleteFav)

module.exports = router;

