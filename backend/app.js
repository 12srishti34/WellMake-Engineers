const express = require('express');
const cors = require('cors');
const path = require('path');
const connectDB = require('./db/connect');

const adminRoutes = require('./routes/adminRoutes');
const userRoutes = require('./routes/userRoutes');
const inquiryRoutes = require('./routes/inquiryRoutes');
const orderRoutes = require('./routes/orderRoutes');
const quoteRoutes = require('./routes/quoteRoutes');
const productRoutes = require('./routes/productRoutes');
const paypalRoutes = require('./routes/paypalRoutes');

const app = express();
app.use(express.json());
app.use(cors());

// ✅ Serve uploaded images
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));


// 🔁 Routes
app.use('/api/admin', adminRoutes);
app.use('/api/user', userRoutes);
app.use('/api/inquiry', inquiryRoutes);
app.use('/api/order', orderRoutes);
app.use('/api/quote', quoteRoutes);
app.use('/api/product', productRoutes);
app.use('/api/paypal', paypalRoutes);

const PORT = 9000;

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
});
