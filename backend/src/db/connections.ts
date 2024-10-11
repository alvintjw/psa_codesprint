import { connect, disconnect } from "mongoose";
async function connectToDatbase() {
  try {
    await connect(process.env.MONGODB_URL);
  } catch (error) {
    throw new Error("Error connecting to the database", error);
  }
}

async function disconnectFromDatabase() {
  try {
    await disconnect();
  } catch (error) {
    throw new Error("Error disconnecting from the database", error);
  }
}

export { connectToDatbase, disconnectFromDatabase };
