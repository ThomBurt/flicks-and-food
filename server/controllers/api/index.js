const router = require('express').Router();
const businessRoutes = require('./business-routes.js');
const homeRoutes = require('./home-routes.js');

router.use('/', homeRoutes);
router.use('/businesses', businessRoutes);

module.exports = router;
