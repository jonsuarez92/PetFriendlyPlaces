const Users = require('../../models/users')

const usersCtrl = {
    register: async (req, res) => {
        try {
            const { name, email, password } = req.body
            if (!name || !email || !password)
                return res.status(400).json({ message: 'Fill out the form' })
            res.json({ message: 'register test' })
        } catch (err) {
            return res.status(500).json({ message: err.message })

        }
    }
}

module.exports = usersCtrl