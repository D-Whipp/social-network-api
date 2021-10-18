const router = require("express").Router();
const userRoutes = require("./user-routes");
const thoughtRoutes = require("./thought-routes");

// add prefix of `/users` to userRoutes 
// and
// add prefix of `/thoughts` to thoughtRoutes
router.use('/users', userRoutes);
router.use('/thoughts', thoughtRoutes);

module.export = router;