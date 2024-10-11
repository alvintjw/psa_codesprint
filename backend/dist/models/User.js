import mongoose from "mongoose";
// Define the User Schema
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        enum: ["employee", "admin", "manager"], // Example roles
        default: "employee",
    },
    department: {
        type: String,
        required: false, // Optional field, you can make it required if needed
    },
    existing_skills: {
        type: [String], // An array of skills for upskilling and role assignment
        default: [],
    },
}, { timestamps: true }); // Adds createdAt and updatedAt fields automatically
export default mongoose.model("User", userSchema);
//# sourceMappingURL=User.js.map