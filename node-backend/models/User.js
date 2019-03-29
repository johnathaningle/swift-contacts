const Promise = require('bluebird');
const bcrypt = Promise.promisifyAll(require('bcrypt-nodejs'));

function hashPassword(user, options) {
    const SALT_FACTOR = 8;
    if (!user.changed('password')) {
        return
    }
    return bcrypt.genSalt(SALT_FACTOR, (err, result) => {
        if (err) {
            console.log("There is an error with bcrypt!");
        } else {
            console.log(result);
        }
    });
}

module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        email: {
            type: DataTypes.STRING,
            unique: true
        },
        password: DataTypes.STRING
    }, {
        hooks: {
            beforeCreate: hashPassword,
            beforeUpdate: hashPassword,
            beforeSave: hashPassword,
        }
    });

    User.prototype.comparePassword = function(password) {
        return bcrypt.compare(password, this.password);
    }

    User.associate = function(models) {
    }
    return User;
}