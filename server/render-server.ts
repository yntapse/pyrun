import { createServer } from "./index";

const app = createServer();
const port = process.env.PORT || 3000;

// Health check endpoint
app.get("/", (req, res) => {
  res.json({ 
    status: "ok", 
    message: "PyrunAi Backend API",
    endpoints: {
      contact: "/api/contact",
      ping: "/api/ping",
      demo: "/api/demo"
    }
  });
});

app.get("/health", (req, res) => {
  res.json({ status: "healthy" });
});

app.listen(port, "0.0.0.0", () => {
  console.log(`🚀 PyrunAi Backend API running on port ${port}`);
  console.log(`🔧 API endpoints available at /api`);
  console.log(`📍 Health check: http://0.0.0.0:${port}/health`);
});

// Graceful shutdown
process.on("SIGTERM", () => {
  console.log("🛑 Received SIGTERM, shutting down gracefully");
  process.exit(0);
});

process.on("SIGINT", () => {
  console.log("🛑 Received SIGINT, shutting down gracefully");
  process.exit(0);
});
