const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

//middleware
app.use(bodyParser.json());
app.use(cors());

const posts = require('./routes/api/posts');

app.use('/api/posts' , posts);

const port = process.env.PORT || 3000;

app.listen(port , ()=>console.log(`connect on port ${port}`));

//handle production

if (process.env.NODE_ENV === 'production') {
	//static folder
	app.use(express.static(__dirname + '/public/'));
	//handle SPA
	app.get(/.*/ , (req , res) => res.sendFile(__dirname + '/public/index.html'));
}


