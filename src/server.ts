import fastify from 'fastify'
import cors from "@fastify/cors"
import { createTrip } from './routes/create-trip'
import { serializerCompiler, validatorCompiler } from 'fastify-type-provider-zod'
import { confirmTrip } from './routes/confirm-trip'
import { confirmParticipant } from './routes/confirm-participant'
import { createActivity } from './routes/create-activity'
import { getActivities } from './routes/get-activities'

const app = fastify()

app.register(cors, {
    // origin: 'http://localhost:3000' // qual url o frontend ta rodando
    origin: '*' // aceita qualquer endereço frontend pra acessar a api
})

app.setValidatorCompiler(validatorCompiler)
app.setSerializerCompiler(serializerCompiler)

app.register(createTrip)
app.register(confirmTrip)
app.register(confirmParticipant)
app.register(createActivity)
app.register(getActivities)

app.listen({ port: 3333 }).then(() => {
    console.log('Server is running on port 3333!')
})