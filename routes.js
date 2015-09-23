module.exports = function (express) {
  var router = express.Router();

  router.get('/', function (req, res) {
    res.send({'nico':'lindo'});
  });

  return router;
};
