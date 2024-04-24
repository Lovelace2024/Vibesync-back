type EnvironmentConfig = {
    app: AppConfig;
    auth0: Auth0Config;
};
type AppConfig = {
    PORT: string | number;
};
type Auth0Config = {
    client_origin: string | undefined;
    audience: string | undefined;
    issuer: string | undefined;
};
declare const _default: EnvironmentConfig;
export default _default;
