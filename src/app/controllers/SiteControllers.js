const Course = require('../models/Course');
const { mutipleMongooseToObject } = require('../../util/mongoose');

class SiteControllers {
    // [GET] /news
    index(req, res, next) {
        Course.find({})
            .then((courses) => {
                res.render('home', {
                    courses: mutipleMongooseToObject(courses),
                });
            })
            .catch(next);
    }

    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteControllers();
