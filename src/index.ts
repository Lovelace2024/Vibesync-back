import app from "./server";
import config from "./config/config"
import prisma from './db/client'

const PORT = config.app.PORT;

prisma.$connect()
    .then(() => {
        app.listen(PORT, () =>
            console.log(`Server running on port ${PORT}`)
        )
    })
    .catch((error: any) => {
        console.error("Error connecting to database:", error)
    })
