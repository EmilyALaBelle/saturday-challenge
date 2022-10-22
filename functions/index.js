import functions from  "firebase-functions"
import express from "express"
import {createCustomer, getAllCustomers, updateCustomer} from './src/customers.js'

const app = express()
app.use(express.json())

app.post('/customers', createCustomer)
app.get('/customers', getAllCustomers)
app.patch('/customers/:uid', updateCustomer)

app.get('/test', (req, res) => res.send('Our API works!'))
export const api = functions.https.onRequest(app)