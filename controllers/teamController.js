const Team = require('../models/Team')

const getAllTeams = async (req, res) => {
  try {
    const teams = await Team.find().populate('members')
    res.json(teams)
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los equipos' })
  }
}

const getTeamById = async (req, res) => {
  try {
    const team = await Team.findById(req.params.id).populate('members')
    if (!team) return res.status(404).json({ error: 'Equipo no encontrado' })
    res.json(team)
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener el equipo' })
  }
}
const createTeam = async (req, res) => {
  try {
    const newTeam = await Team.create(req.body)
    res.status(201).json(newTeam)
  } catch (error) {
    res
      .status(400)
      .json({ error: 'Error al crear el equipo', details: error.message })
  }
}

const updateTeam = async (req, res) => {
  try {
    const updated = await Team.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    })
    if (!updated) return res.status(404).json({ error: 'Equipo no encontrado' })
    res.json(updated)
  } catch (error) {
    res
      .status(400)
      .json({ error: 'Error al actualizar el equipo', details: error.message })
  }
}

module.exports = {
  getAllTeams,
  getTeamById,
  createTeam,
  updateTeam
}
