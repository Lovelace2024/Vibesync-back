import express, {Express} from 'express'
import morgan from 'morgan'
import helmet from 'helmet'

const app: Express = express()

app.use(helmet())
app.use(morgan('tiny'))

//conexion con el front
// app.use(cors({
//     origin: "http://localhost:5173"
// }))

// app.use("/user", userRoutes)

export default app