const express = require('express')
const app = express()

var User = require('./user')

app.get('/users', (req, res) => {
	User.all()
		.then(function (users) {
		  res.status(200)
			.json(users)
		})
		.catch(function (err) {
			console.log(err)
			res.status(500).json({error: true, data: {error: err,
        message: err.message}});
		  })
})
app.get('/', (req, res) => res.send('Hello World!'))

app.listen(3000, () => console.log('Example app listening on port 3000!'))
