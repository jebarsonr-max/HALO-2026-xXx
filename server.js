/**
 * Express Server Application
 */
const express = require('express');
const cors = require('cors');
const config = require('./config/env');
const aiRoutes = require('./routes/ai.routes');
const authRoutes = require('./routes/auth.routes');
const hrRoutes = require('./routes/hr.routes');
const errorMiddleware = require('./middleware/error.middleware');

const app = express();

// Middlewares
app.use(cors());
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Mount Auth & HR Routes
app.use('/api/auth', authRoutes);
app.use('/api/hr', hrRoutes);

// Mount AI Routes on both /api and /api/ai for 100% backward and forward compatibility
app.use('/api/ai', aiRoutes);
app.use('/api', aiRoutes);

// Error Handling Middleware
app.use(errorMiddleware);

module.exports = app;
