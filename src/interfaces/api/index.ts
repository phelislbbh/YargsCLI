// index.ts
import express from "express";
import trialsRoutes from "./trialRoutes"; // Import your route module

const app = express();
const port = process.env.PORT || 8080;

// Enable JSON body parsing
app.use(express.json());

// Mount the trialsRoutes module at /trials
app.use("/trials", trialsRoutes);

// Start the server
if (require.main === module) {
  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
}

export { app };
