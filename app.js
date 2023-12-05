const express = require('express');
const path = require('path');
const app = express();

app.use(express.static('public'));
app.use(express.static('views'));

app.get('/', function (req, res) {
	res.sendFile(path.join(__dirname, 'views', 'home.html'));
});

app.listen(3000, function () {
	console.log('Server is running on port 3000');
});
