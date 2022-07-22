const Users = require('../../models/users')
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

//below is how to validate if the email is a email
const validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return re.test(email);
};


const usersCtrl = {
    register: async (req, res) => {
        try {
            const { name, email, password } = req.body
            // retunr 400 if the register form isnt filled out
            if (!name || !email || !password)
                return res.status(400).json({ message: 'Fill out the form' })

            //if email is not a valid email return 400 
            if (!validateEmail(email))
                return res.status(400).json({ message: 'invalid email' })

            // findOne is a mongoDb method to find one of some type of data in this case its trying 
            //to find out if the email in use
            const user = await Users.findOne({ email })
            if (user)
                return res.status(400).json({ message: 'the email is already in use' })
            // below is to make sure the password is greater then 6 
            if (password.length < 6)
                return res.status(400).json({ message: 'password must be greater then 6 characters' })

            res.json({ message: 'register test' })
        } catch (err) {
            return res.status(500).json({ message: err.message })

        }
    }
}

module.exports = usersCtrl