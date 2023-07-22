const getCharById = require('../controllers/getCharById')
const {postFav, deleteFav} = require('../controllers/handleFavorites')
const getLogin = require('../controllers/login')
const {Router}= require('express')

const router = Router()

router.get('/character/:id', getCharById)
router.get('/login',getLogin)
router.post('/fav', postFav)
router.delete('/fav/:id',deleteFav)

module.exports = router;
