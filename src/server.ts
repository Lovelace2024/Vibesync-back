import express, { Express } from "express";
import responseTime from "response-time";
import morgan from "morgan";
import helmet from "helmet";
import errorHandler from "./middlewares/error.middleware.ts";
import cors from "cors";
import userRoutes from "./routes/user.routes.ts";
import loginRoutes from "./routes/login.routes.ts";
import genreRoutes from "./routes/genre.routes.ts";
import tracksRoutes from "./routes/tracks.routes.ts";
import artistsRoutes from "./routes/artists.routes.ts";
import albumsRoutes from "./routes/albums.routes.ts";
import json from "body-parser";
import urlencoded from "body-parser";

const app: Express = express();

app.use(helmet());
app.use(morgan("dev"));
app.use(errorHandler);
app.use(responseTime());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//conexion con el front
app.use(
  cors({
    origin: "http://localhost:5173",
  }),
);

app.use("/api", userRoutes);
app.use("/api", loginRoutes);
app.use("/api", artistsRoutes);
app.use("/api", genreRoutes);
app.use("/api", tracksRoutes);
// app.use("/api", albumsRoutes)

export default app;
