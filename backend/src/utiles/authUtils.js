const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const SECRET_KEY = process.env.JWT_SECRET || "your_secret_key";

// Hash password before saving to database
const hashPassword = async (password) => {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
};

// Compare entered password with hashed password
const comparePassword = async (password, hashedPassword) => {
    return await bcrypt.compare(password, hashedPassword);
};

// Generate JWT token
const generateToken = (user) => {
    return jwt.sign({ id: user.id, email: user.email }, SECRET_KEY, { expiresIn: "7d" });
};

// Verify JWT token
const verifyToken = (token) => {
    return jwt.verify(token, SECRET_KEY);
};

module.exports = {
    hashPassword,
    comparePassword,
    generateToken,
    verifyToken
};
