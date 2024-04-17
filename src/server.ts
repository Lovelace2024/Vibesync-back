import express, {Express} from 'express'
import morgan from 'morgan'
import helmet from 'helmet'
import userRoutes from './routes/user.routes.ts'

const app: Express = express()

app.use(helmet())
app.use(morgan('tiny'))
app.use("/", userRoutes)

//conexion con el front
// app.use(cors({
//     origin: "http://localhost:5173"
// }))

// app.use("/user", userRoutes)

export default app