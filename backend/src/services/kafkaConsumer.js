import { Kafka } from "kafkajs";
import { Order } from "../models/Order.js";

const kafka = new Kafka({ brokers: [process.env.KAFKA_BROKER || 'localhost:9092'] });
const consumer = kafka.consumer({ groupId: "order-group" });

export const startKafkaConsumer = async () => {
  await consumer.connect();
  await consumer.subscribe({ topic: "order-events", fromBeginning: true });

  await consumer.run({
    eachMessage: async ({ message }) => {
      const orderData = JSON.parse(message.value.toString());
      const updatedOrder = await Order.findByIdAndUpdate(
        orderData._id,
        { status: "processed" },
        { new: true }
      );

      console.log("Order processed:", updatedOrder);

      global.io.emit("orderUpdated", updatedOrder);
    },
  });
};
