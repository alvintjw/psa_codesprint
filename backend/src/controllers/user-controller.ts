import { Request, Response, NextFunction } from "express";
import User from "../models/User.js";

export const getAllUsers = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    //get all users from the database
    const users = await User.find();
    return res.status(200).json({ message: "OK", users });
  } catch (error) {
    //if an error occurs, pass it to the error handler
    console.log(error);
    return res.status(200).json({ message: "Error", cause: error.message });
  }
};

// Login function (comparing plain-text passwords)
export const loginUser = async (req: Request, res: Response) => {
  console.log("POST /login route hit"); // Add this line to confirm the route is reached

  const { email, password } = req.body; // Get email and password from request body

  try {
    // Check if the user exists in the database
    const user = await User.findOne({ email: email });

    // If user does not exist, return an error
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Check if the provided plain-text password matches the one stored in the database
    if (user.password !== password) {
      return res.status(401).json({ message: "Incorrect password" });
    }

    console.log("User logged in:", user);

    // If login is successful, return user information (without password)
    res.status(200).json({
      message: "Login successful. Welcome!",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        department: user.department,
      },
    });
  } catch (error) {
    // Handle any errors
    res.status(500).json({ message: "Server error", error });
  }
};
