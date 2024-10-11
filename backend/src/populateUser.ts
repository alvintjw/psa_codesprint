import mongoose from "mongoose";
import dotenv from "dotenv";
import User from "./models/User.js";

dotenv.config(); // Load environment variables from .env

// Connect to MongoDB
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("Connected to MongoDB");
    populateUsers(); // Call the function to populate users
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err.message);
  });

// Function to populate users
const populateUsers = async () => {
  try {
    // Define user data
    const users = [
      {
        name: "John Doe",
        email: "john@example.com",
        password: "password123", // Normally you'd hash this
        role: "employee",
        department: "Sales",
        existing_skills: ["Communication", "Salesforce", "Negotiation"],
      },
      {
        name: "Jane Smith",
        email: "jane@example.com",
        password: "password123",
        role: "manager",
        department: "Marketing",
        existing_skills: ["SEO", "Content Strategy", "Project Management"],
      },
      {
        name: "Admin User",
        email: "admin@example.com",
        password: "adminpassword",
        role: "admin",
        department: "Admin",
        existing_skills: ["Leadership", "Management"],
      },
    ];

    // Insert users into the database
    await User.insertMany(users);
    console.log("Users populated successfully!");
    mongoose.disconnect(); // Disconnect after insertion
  } catch (error) {
    console.error("Error populating users:", error.message);
    mongoose.disconnect();
  }
};
