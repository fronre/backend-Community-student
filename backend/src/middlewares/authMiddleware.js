
const jwt = require("jsonwebtoken");
require("dotenv").config(); // تحميل متغيرات البيئة

const authMiddleware = (req, res, next) => {
    // جلب التوكن من الهيدر
    const token = req.header("Authorization");

    if (!token) {
        return res.status(401).json({ message: "Unauthorized - No token provided" });
    }

    try {
        // فك تشفير التوكن والتحقق منه
        const decoded = jwt.verify(token.replace("Bearer ", ""), process.env.JWT_SECRET);
        req.user = decoded; // تخزين بيانات المستخدم في `req`
        next(); // السماح بتمرير الطلب
    } catch (error) {
        res.status(401).json({ message: "Unauthorized - Invalid token" });
    }
};

module.exports = authMiddleware;
