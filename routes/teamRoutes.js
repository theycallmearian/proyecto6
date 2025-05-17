const express = require('express')
const router = express.Router()
const {
  getAllTeams,
  createTeam,
  getTeamById,
  updateTeam
} = require('../controllers/teamController')

router.get('/', getAllTeams)
router.post('/', createTeam)
router.get('/:id', getTeamById)
router.put('/:id', updateTeam)

module.exports = router
