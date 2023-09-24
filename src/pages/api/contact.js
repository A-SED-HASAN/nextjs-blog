import { MongoClient } from 'mongodb'

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email, name, message } = req.body

    // ["ali", 'hasan, "second", 2].indexOf(name) !== -1
    //for checking multiple condition
    if (
      !email ||
      !name ||
      name.trim() === '' ||
      !message ||
      message.trim() === ''
    ) {
      res.status(422).json({ message: 'invalid input' })
      return
    }

    const newMessage = {
      email,
      name,
      message,
    }
    const connectionString = `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_cluster}.xb96tcq.mongodb.net/${process.env.mongodb_database}`

    let client
    try {
      client = await MongoClient.connect(connectionString)
    } catch (error) {
      res.status(500).json({ message: 'could not connect to db' })
      return
    }

    const db = client.db()

    try {
      const result = await db.collection('messages').insertOne(newMessage)
      newMessage.id = result.insertedId
    } catch (error) {
      client.close()
      res.status(500).json({ message: 'storing failed' })
      return
    }

    client.close()
    res
      .status(201)
      .json({ message: 'successfully stored message!', message: newMessage })
  }
}
