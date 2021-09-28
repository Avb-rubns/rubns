import mongoose from 'mongoose'

const { MONGO_URI } = process.env

export class MongoDBService {
  constructor () {
    this.connect()
  }

  async connect () {
    try {
      await mongoose.connect(MONGO_URI, {
        useUnifieldTopology: true,
        useNewUrlParse: true
      })
    } catch (error) {
      console.log(error)
    }
  }
}
