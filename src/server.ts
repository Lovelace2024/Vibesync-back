import express, { Express } from 'express'
import responseTime from 'response-time'
import morgan from 'morgan'
import helmet from 'helmet'
import errorHandler from './middlewares/error.middleware.ts'
import cors from 'cors'
import userRoutes from './routes/user.routes.ts'
import loginRoutes from './routes/login.routes.ts'

const app: Express = express()

app.use(helmet())
app.use(morgan('tiny'))
app.use(errorHandler)
app.use(responseTime())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

//conexion con el front
app.use(cors({
    origin: "http://localhost:5173"
}))

app.use("/api", userRoutes)
app.use("/api", loginRoutes)

export default app