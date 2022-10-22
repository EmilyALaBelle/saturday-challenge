import { dbConnect} from './dbConnect.js'

export async function createCustomer(req, res) {
    const db = dbConnect();
    const doc = await db.collection('customers').add(req.body)
    .catch(err => res.status(500).send({success: false, message: err }))
    res.status(201).send({success: true, message: 'Customer Created ' + doc.id})
}

export async function getAllCutsomers(req, res) {
    const db = dbConnect()
    const collection = await db.collection('customers').get()
    .catch(err => res.status(500).send({ success: false, message: err}))
    const users = collection.docs.map(doc => {
        let customer = doc.data()
        cutsomer.uid = doc.id
        return customer
    })
    res.send(customer)
}