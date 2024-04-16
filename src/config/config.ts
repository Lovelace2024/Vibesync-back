import dotenv from 'dotenv'

type TConfig = {
    [key: string]: EnvironmentConfig
}

type EnvironmentConfig = {
    app: AppConfig;
    db: DBConfig;
}

type AppConfig = {
    PORT: string | number
}

type DBConfig = {
    URI: string
}
if (process.env.NODE_ENV === 'production') {
    dotenv.config({ path: '.env.production' })
} else {
    dotenv.config({ path: '.env.development' })
}

const ENV = process.env.NODE_ENV ?? 'development'

const {
    PORT,
    MONGODB_URI
} = process.env

const CONFIG: TConfig = {
    development: {
        app: {
            PORT: PORT || 4002
        },
        db: {
            URI: MONGODB_URI || "mongodb://127.0.0.1:27017/vibesync"
        }
    },
    production: {
        app: {
            PORT: PORT || 8082
        },
        db: {
            URI: MONGODB_URI || "mongodb://127.0.0.1:27017/vibesync"
        }
    }
}

export default CONFIG[ENV]