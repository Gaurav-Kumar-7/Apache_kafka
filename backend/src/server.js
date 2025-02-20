import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { createServer } from "http";
import { Server } from "socket.io";
import { connectDB } from "./config/db.js";
import orderRoutes from "./routes/orderRoutes.js";
import { startKafkaConsumer } from "./services/kafkaConsumer.js";

dotenv.config();
connectDB();

const app = express();
const server = createServer(app);
const io = new Server(server, { cors: { origin: "*" } });

app.use(cors({
  origin: "http://localhost:5174",
}));
app.use(express.json());
app.use("/api/orders", orderRoutes);

global.io = io;

const PORT = process.env.PORT || 5000; // Changed the default port to 5000
server.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  startKafkaConsumer();
});
