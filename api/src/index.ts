import express, { type Request, type Response } from 'express'

const app = express()

const port = process.env.PORT || 8000

app.get('/', (req: Request, res: Response) => {
  res.send('<h2>This is Gundam Store API</h2>');
})

app.listen(port, () => {
  console.log(`🤖 Gundam Store API listening on port ${port}`)
})