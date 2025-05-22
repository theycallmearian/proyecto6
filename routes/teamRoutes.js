const express = require('express')
const router = express.Router()
const {
  getAllTeams,
  createTeam,
  getTeamById,
  updateTeam,
  deleteTeam
} = require('../controllers/teamController')

router.get('/', getAllTeams)
router.post('/', createTeam)
router.get('/:id', getTeamById)
router.put('/:id', updateTeam)
router.delete('/:id', deleteTeam)

module.exports = router
