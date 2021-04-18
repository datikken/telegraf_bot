const express = require('express')
const bot = require('./bot');

function startServer(bot) {
    let app = express();

    // app.use(express.static(path.join(__dirname, 'public')));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    // app.set('views', path.join(__dirname, './views'));
    // app.set('view engine', 'ejs');

    // app.get('/', homeController);
    // app.post('/globalmessage', globalMessageController);

    let port = process.env.PORT || 5000;
    app.listen(port, function () {
        console.log(`Server started at ${port}`);
    });
}

startServer(bot);
