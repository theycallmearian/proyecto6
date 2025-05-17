const express = require('express')
const router = express.Router()
const {
  getAllHeroes,
  createHero,
  getHeroById,
  updateHero
} = require('../controllers/heroController')

router.get('/', getAllHeroes)
router.post('/', createHero)
router.get('/:id', getHeroById)
router.put('/:id', updateHero)

module.exports = router
