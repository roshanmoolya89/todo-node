import dotenv from "dotenv";
import app from "./app";

dotenv.config();

const port = Number(process.env.PORT) || 3000;
const host = process.env.HOST ?? "0.0.0.0";

const server = app.listen(port, host, () => {
  const displayHost = host === "0.0.0.0" ? "localhost" : host;
  console.log(`Server ready at http://${displayHost}:${port}`);
});

const shutdown = (signal: NodeJS.Signals) => {
  console.log(`\n${signal} received. Shutting down gracefully...`);
  server.close(() => process.exit(0));
};

["SIGINT", "SIGTERM"].forEach((signal) => {
  process.on(signal as NodeJS.Signals, () =>
    shutdown(signal as NodeJS.Signals)
  );
});
