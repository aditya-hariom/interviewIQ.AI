import genToken from "../config/token.js";
import User from "../models/user.model.js";

export const googleAuth = async (req, res) => {
  try {
    const { name, email } = req.body;

    // Check if user exists
    let user = await User.findOne({ email });

    // Create new user if not found
    if (!user) {
      user = await User.create({
        name,
        email,
      });
    }

    // Generate JWT Token
    const token = genToken(user._id);

    // Save token in cookie
    res.cookie("token", token, {
      httpOnly: true,
      secure: false, // true when using HTTPS
      sameSite: "lax",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    // Send user
    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json({
      message: `Google auth error: ${error.message}`,
    });
  }
};

export const logOut = async (req, res) => {
  try {
    res.clearCookie("token");

    return res.status(200).json({
      message: "Logout Successfully",
    });
  } catch (error) {
    return res.status(500).json({
      message: `Logout error: ${error.message}`,
    });
  }
};