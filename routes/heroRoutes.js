const express = require('express')
const router = express.Router()
const {
  getAllHeroes,
  createHero,
  getHeroById,
  updateHero,
  deleteHero
} = require('../controllers/heroController')

router.get('/', getAllHeroes)
router.post('/', createHero)
router.get('/:id', getHeroById)
router.put('/:id', updateHero)
router.delete('/:id', deleteHero)

module.exports = router
