import functions from  "firebase-functions"
import express from "express"

const app = express()
app.use(express.json())

app.get('/test', (req, res) => res.send('Our API works!'))
export const api = functions.https.onRequest(app)