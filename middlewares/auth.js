function auth(req, res, next) {
  if (req.session?.user) {
    next();
  } else {
    res.json({ message: 'вы не авторизованы' });
  }
}
module.exports = auth;
