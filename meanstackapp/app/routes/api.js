var User = require('../models/user');

module.exports = function (router) {

    router.post('/users', function (req, res) {
        var user = new User();
        user.username = req.body.username;
        user.password = req.body.password;
        user.email = req.body.email;

        if (req.body.username == null || req.body.username == '' || req.body.password == null || req.body.password == '' || req.body.email == '' || req.body.email == '') {
            res.send('Ensure username, email and password were provided');
        } else {
            user.save(function (err) {
                if (err) {
                    res.send('Username or Email already Exists. Please try a different username or an email address');
                } else {
                    res.send('User created');
                }
            });
        }

    });

    return router;

}