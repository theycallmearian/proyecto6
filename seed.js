require('dotenv').config()
const mongoose = require('mongoose')
const Hero = require('./models/Hero')
const Team = require('./models/Team')

async function seed() {
  await mongoose.connect(process.env.MONGO_URI)

  const heroesData = [
    { name: 'Iron Man', power: 'Armadura inteligente', alias: 'Tony Stark' },
    { name: 'Thor', power: 'Dios del Trueno' },
    { name: 'Hulk', power: 'Fuerza bruta' },
    { name: 'Black Widow', power: 'Espionaje', alias: 'Natasha Romanoff' },
    { name: 'Capitán América', power: 'Super soldado', alias: 'Steve Rogers' }
  ]

  const heroDocs = []
  for (const hero of heroesData) {
    const savedHero = await Hero.findOneAndUpdate(
      { name: hero.name },
      { $set: hero },
      { upsert: true, new: true }
    )
    heroDocs.push(savedHero)
  }

  console.log('✅ Héroes insertados correctamente')

  const teamsData = [
    {
      name: 'Avengers',
      members: heroDocs.map((hero) => hero._id)
    },
    {
      name: 'Solo Hulk',
      members: heroDocs.filter((h) => h.name === 'Hulk').map((h) => h._id)
    }
  ]

  for (const team of teamsData) {
    await Team.findOneAndUpdate(
      { name: team.name },
      { $set: team },
      { upsert: true }
    )
  }

  console.log('✅ Equipos insertados correctamente')

  await mongoose.disconnect()
}

seed().catch(console.error)
