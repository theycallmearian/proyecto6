const Team = require('../models/Team')

const getAllTeams = async (req, res) => {
  try {
    const teams = await Team.find().populate('members')
    res.status(200).json(teams)
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los equipos' })
  }
}

const getTeamById = async (req, res) => {
  try {
    const team = await Team.findById(req.params.id).populate('members')
    if (!team) return res.status(404).json({ error: 'Equipo no encontrado' })
    res.status(200).json(team)
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener el equipo' })
  }
}

const createTeam = async (req, res) => {
  try {
    const { name, members } = req.body
    if (!name || !Array.isArray(members)) {
      return res
        .status(400)
        .json({ error: 'Faltan campos obligatorios o inválidos' })
    }

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
    const updateData = { ...req.body }

    if (updateData.members) {
      const existing = await Team.findById(req.params.id)
      const existingMembers = existing.members || []
      updateData.members = [
        ...new Set([...existingMembers, ...updateData.members])
      ]
    }

    const updated = await Team.findByIdAndUpdate(req.params.id, updateData, {
      new: true
    })

    if (!updated) return res.status(404).json({ error: 'Equipo no encontrado' })
    res.status(200).json(updated)
  } catch (error) {
    res
      .status(400)
      .json({ error: 'Error al actualizar el equipo', details: error.message })
  }
}

const deleteTeam = async (req, res) => {
  try {
    const deleted = await Team.findByIdAndDelete(req.params.id)
    if (!deleted) return res.status(404).json({ error: 'Equipo no encontrado' })
    res.status(200).json({ message: 'Equipo eliminado correctamente' })
  } catch (error) {
    res
      .status(500)
      .json({ error: 'Error al eliminar el equipo', details: error.message })
  }
}

module.exports = {
  getAllTeams,
  getTeamById,
  createTeam,
  updateTeam,
  deleteTeam
}
