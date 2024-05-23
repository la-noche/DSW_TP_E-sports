import express from 'express'
import { TipoJuego } from './tipoJuego/tipoJuego.entity.js'

const app = express()
app.use(express.json())

//creo un array de tipos de juegos y añado un tipo para probar
const TiposDeJuegos = [
  new TipoJuego(
    'Shooter',
    'Juego de disparos y accion',
    'a02b91bc-3769-4221-beb1-d7a3aeba7dad'
  ),
]

// get -> obtener informacion sobre recursos
// obtengo todos los tipos de juegos
app.get('/api/TiposDeJuegos', (req, res) => {
  res.json({data: TiposDeJuegos})
})

app.use((_, res) => {
  return res.status(404).send({ message: 'Resource not found' })
})

app.listen(3000, () => {
  console.log('Server runnning on http://localhost:3000/')
})