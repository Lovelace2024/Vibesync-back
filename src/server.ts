import express, {Express} from 'express'
import morgan from 'morgan'
import helmet from 'helmet'
import errorHandler from './middlewares/error.middleware.ts'
import cors from 'cors'

const app: Express = express()

app.use(helmet())
app.use(morgan('tiny'))
app.use(errorHandler)

//conexion con el front
app.use(cors({
    origin: "http://localhost:5173"
}))

// app.use("/user", userRoutes)

export default app