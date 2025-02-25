const express = require("express");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors()); // للسماح بطلبات من دومينات مختلفة
app.use(express.json()); // لفهم البيانات بصيغة JSON

// استيراد المسارات
const userRoutes = require("./routes/userRoutes");
const communityRoutes = require("./routes/communityRoutes");
const postRoutes = require("./routes/postRoutes");
const eventRoutes = require("./routes/eventRoutes"); // Add this line

// استخدام المسارات
app.use("/api/users", userRoutes);
app.use("/api/communities", communityRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/events", eventRoutes); // Add this line

module.exports = app;
