const path = require('path');
const colour = require('colour');
const express = require('express');
const webpack = require('webpack');
const session = require('express-session');
const bodyParser = require('body-parser');
const config = require('./webpack.config.dev');
const methodOverride = require('method-override');
// const routes = require('./api/routes');

const app = express();
const compiler = webpack(config);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(methodOverride());
app.use(session({ secret: 'keyboard cat', resave: false, saveUninitialized: false }));
// Initialize Passport!  Also use passport.session() middleware, to support
// persistent login sessions (recommended).

app.use(require('webpack-dev-middleware')(compiler, {
	noInfo: true,
	publicPath: config.output.publicPath,
	contentBase: './src',
	stats: {
		colors: true
	},
	historyApiFallback: true
}));

app.use(require('webpack-hot-middleware')(compiler));

// app.use('/', routes); // Include router with routes

app.get('*', function(req, res) {
	res.sendFile(path.join(__dirname, 'src', 'index.html'));
});

app.listen(3030, 'localhost', function(err) {
	if (err) {
		console.log(err);
		return;
	}

	console.log(colour.green('☀︎  Listening at http://localhost:3030  ☀︎'));
});
