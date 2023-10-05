import express from "express";
import routesUsers from "./src/routes/routesUsers.js";
import routesAbilities from "./src/routes/routesAbilities.js";
import routesCompanies from "./src/routes/routesCompanies.js";
import routesQuotesContracts from "./src/routes/routesQuotesContracts.js";
import routesContracts from "./src/routes/routesContracts.js";
import routesQuotes from "./src/routes/routesQuotes.js";

const app = express();

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(
  routesUsers,
  routesAbilities,
  routesCompanies,
  routesQuotesContracts,
  routesContracts,
  routesQuotes
);

export default app;
