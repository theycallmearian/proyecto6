const Hero = require('../models/Hero')

const getAllHeroes = async (req, res) => {
  const heroes = await Hero.find()
  res.status(200).json(heroes)
}

const createHero = async (req, res) => {
  try {
    const { name, power, related } = req.body
    if (!name || !power) {
      return res.status(400).json({ error: 'Faltan campos obligatorios' })
    }

    const hero = await Hero.create(req.body)
    res.status(201).json(hero)
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
}

const getHeroById = async (req, res) => {
  const hero = await Hero.findById(req.params.id)
  if (!hero) return res.status(404).json({ error: 'Héroe no encontrado' })
  res.status(200).json(hero)
}

const updateHero = async (req, res) => {
  try {
    const updateData = { ...req.body }

    if (updateData.related) {
      const existing = await Hero.findById(req.params.id)
      const existingRelated = existing.related || []
      updateData.related = [
        ...new Set([...existingRelated, ...updateData.related])
      ]
    }

    const hero = await Hero.findByIdAndUpdate(req.params.id, updateData, {
      new: true
    })

    if (!hero) return res.status(404).json({ error: 'Héroe no encontrado' })
    res.status(200).json(hero)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

const deleteHero = async (req, res) => {
  try {
    const deleted = await Hero.findByIdAndDelete(req.params.id)
    if (!deleted) return res.status(404).json({ error: 'Héroe no encontrado' })
    res.status(200).json({ message: 'Héroe eliminado correctamente' })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

module.exports = {
  getAllHeroes,
  createHero,
  getHeroById,
  updateHero,
  deleteHero
}
