const express = require('express');
const compression = require('compression');
const path = require('path');

const app = express();
const PORT = 3000;
const HOST = '0.0.0.0';

// Enable GZIP compression for all responses
app.use(compression());

// Security headers & basic SEO headers
app.use((req, res, next) => {
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'SAMEORIGIN');
  res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
  next();
});

// Service Worker must not be aggressively cached
app.get('/sw.js', (req, res) => {
  res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
  res.setHeader('Content-Type', 'application/javascript');
  res.sendFile(path.join(__dirname, 'sw.js'));
});

// Static files with cache control
app.use(express.static(__dirname, {
  extensions: ['html'],
  maxAge: '1d',
  setHeaders: (res, filePath) => {
    if (filePath.endsWith('.html')) {
      res.setHeader('Cache-Control', 'public, max-age=3600, must-revalidate');
    } else if (filePath.match(/\.(css|js|webp|png|jpg|jpeg|svg|ico|woff2?|ttf|eot)$/)) {
      res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
    }
  }
}));

// 404 handler for unknown routes
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, '404.html'));
});

const server = app.listen(PORT, HOST, () => {
  console.log(`Server running on port ${PORT}`);
});

server.on('error', (err) => {
  console.error('❌ Server error:', err);
});
