import app from "./server.ts";
import config from "./config/config.ts";
import prisma from "./db/client.ts";

const PORT = config.app.PORT;

prisma
  .$connect()
  .then(() => {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((error: any) => {
    console.error("Error connecting to database:", error);
  });
