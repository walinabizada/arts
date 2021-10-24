const db = require('../models');
const config = require("../config/auth.config");
const User = db.users;
const fs = require('fs');
const bcrypt = require("bcrypt");

const Op = db.sequelize.Op;

var jwt = require('jsonwebtoken');

exports.signup = (req, res) => {
    // Save User to Database
    const body = req.body;
    const saltRounds = 10;
    bcrypt.genSalt(saltRounds, (err, salt) => {
        bcrypt.hash(body.password, salt, (err, hash) => {
            // Now we can store the password hash in db.
            const user = {
                firstName: body.fname,
                lastName: body.lname,
                userName: body.uname,
                password: hash,
                email: body.email,
                phone: body.phone,
                dob: body.dob,
                gender: body.gender,
                accountType: 'User',
                image: saveImage(body.image),
            };


            // Save User in the database
            User.create(user)
                .then(data => {
                    res.send({ message: "User was registered successfully!" });
                })
                .catch(err => {
                    res.status(500).send({
                        message:
                            err.message || "Some error occurred while creating the User."
                    });
                });
        });
    });
};

exports.signin = (req, res) => {
    User.findOne({
        where: {
            userName: req.body.uname
        }
    }).then(user => {
        if (!user) {
            return res.status(404).send({ message: "User Not found." });
        }

        var passwordIsValid = bcrypt.compareSync(req.body.password, user.password);

        if (!passwordIsValid) {
            return res.status(401).send({
                accessToken: null,
                message: "Invalid Password!"
            });
        }

        var token = jwt.sign({ id: user.id }, config.secret, {
            expiresIn: 86400 // 24 hours
        });

        res.status(200).send({
            fname: user.fname,
            lname: user.lname,
            uname: user.uname,
            email: user.email,
            phone: user.phone,
            dob: user.dob,
            gender: user.gender,
            accountType: user.accountType,
            image: user.image,
            accessToken: token
        });
    }).catch(err => {
        res.status(500).send({ message: err.message });
    })

};


/*Download the base64 image in the server and returns the filename and path of image.*/
function saveImage(baseImage) {
    /*path of the folder where your project is saved. (In my case i got it from config file, root path of project).*/
    const uploadPath = "assests";
    const imgname = new Date().getTime().toString();
    //path of folder where you want to save the image.
    const localPath = `${uploadPath}/users/`;
    //Find extension of file
    const ext = baseImage.substring(baseImage.indexOf("/") + 1, baseImage.indexOf(";base64"));
    const fileType = baseImage.substring("data:".length, baseImage.indexOf("/"));
    //Forming regex to extract base64 data of file.
    const regex = new RegExp(`^data:${fileType}\/${ext};base64,`, 'gi');
    //Extract base64 data.
    const base64Data = baseImage.replace(regex, "");
    const filename = `user-${imgname}.${ext}`;

    //Check that if directory is present or not.
    if (!fs.existsSync(`${uploadPath}/users/`)) {
        fs.mkdirSync(`${uploadPath}/users/`);
    }
    if (!fs.existsSync(localPath)) {
        fs.mkdirSync(localPath);
    }
    fs.writeFileSync(localPath + filename, base64Data, 'base64');
    return filename;
};