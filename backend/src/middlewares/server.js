const express = require('express');
const app = require('./app'); // استيراد التطبيق من app.js
const dotenv = require('dotenv');

// تحميل المتغيرات من .env
dotenv.config();

// 📌 تحديد رقم البورت من .env أو استخدام 5000 كافتراضي
const PORT = process.env.PORT || 5000;

// ✅ تشغيل السيرفر
app.listen(PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${PORT}`);
});

