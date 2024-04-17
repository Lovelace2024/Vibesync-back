import dotenv from 'dotenv'

type TConfig = {
    [key: string]: EnvironmentConfig
}

type EnvironmentConfig = {
    app: AppConfig;
    auth0: Auth0Config;
    // db: DBConfig;
}

type AppConfig = {
    PORT: string | number
}

type Auth0Config = {
    client_origin: string | undefined,
    audience: string | undefined,
    issuer: string | undefined
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
        auth0: {
            client_origin: process.env.APP_ORIGIN,
            audience: process.env.AUTH0_AUDIENCE,
            issuer: process.env.AUTH0_ISSUER
        }
    },
    production: {
        app: {
            PORT: PORT || 8082
        },
        auth0: {
            client_origin: process.env.APP_ORIGIN,
            audience: process.env.AUTH0_AUDIENCE,
            issuer: process.env.AUTH0_ISSUER
        }
        // db: {
        //     URI: MONGODB_URI || "mongodb://127.0.0.1:27017/vibesync"
        // }
    }
}

export default CONFIG[ENV]