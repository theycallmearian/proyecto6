const Hero = require('../models/Hero')

const getAllHeroes = async (req, res) => {
  const heroes = await Hero.find()
  res.json(heroes)
}

const createHero = async (req, res) => {
  try {
    const hero = await Hero.create(req.body)
    res.status(201).json(hero)
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
}

const getHeroById = async (req, res) => {
  const hero = await Hero.findById(req.params.id)
  if (!hero) return res.status(404).json({ error: 'Héroe no encontrado' })
  res.json(hero)
}

const updateHero = async (req, res) => {
  const hero = await Hero.findByIdAndUpdate(req.params.id, req.body, {
    new: true
  })
  if (!hero) return res.status(404).json({ error: 'Héroe no encontrado' })
  res.json(hero)
}

module.exports = {
  getAllHeroes,
  createHero,
  getHeroById,
  updateHero
}
