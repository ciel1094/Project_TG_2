const CheckLogin = (req, res, next) => {
    req.session.isLoggedIn = false;

    next();
};
module.exports = CheckLogin;