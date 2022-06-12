
import hoteldetails from "../../hotelitems" ;

async function routes (fastify, options) {
  const collection = fastify.mongo.db.collection('hotels')

  fastify.get('/', async (request, reply) => {
    return { hello: 'world' }
  })

  fastify.get('/hoteldetails', async (request, reply) => {
    const result = await collection.find().toArray()
    if (result.length === 0) {
      throw new Error('No documents found')
    }
    return result
  })

  fastify.get('/hoteldetails/:id', async (request, reply) => {
    const result = await collection.findOne({ _id: request.params.id })
    if (!result) {
      throw new Error('Invalid value')
    }
    return {
           result.hotelName ,
           result.hotelDesc
    }
  })

  
const hotelSchema = {
  hotelName : String ,
  desc : String

}
const contactSchema = {
  name : String ,
  hotelName : String ,
  feedback : String 
}

  const schema1 = {
    body: hotelSchema
  }
  const schema2 = {
    body : contactSchema
  }


  fastify.post('/contactus', { schema2 }, async (request, reply) => {
    // we can use the `request.body` object to get the data sent by the client
    const {name , feedback} = request.body
    const result = await collection.insert({ name , feedback })
    return result
  })
}

module.exports = routes