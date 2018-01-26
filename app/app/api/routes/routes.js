

/* globals __dirname */
const path = require('path');

const wait = require('../utils/waiter');
const validator = require('../utils/validator');

const SECONDS_TO_WAIT = 1;

const init = (app, db) => {
    app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname, '../../client/index.html'), 'utf-8');
    });

    app.get('/create', (req, res) => {
        res.sendFile(path.join(__dirname, '../../client/create.html'), 'utf-8');
    });

    app.get('/api/superheroes', async (req, res) => {
        const superheroes = db.get('superheroes')
            .value()
            .map((superhero) => {
                return {
                    id: superhero.id,
                    name: superhero.name,
                    imgUrl: superhero.imgUrl,
                };
            });

        await wait(SECONDS_TO_WAIT);
        res.send(superheroes);
    });

    app.get('/api/superheroes/:id', async (req, res) => {
        const id = req.params.id;

        const superhero = db.get('superheroes')
            .find({
                id,
            })
            .value();

        await wait(SECONDS_TO_WAIT);
        res.send(superhero);
    });

    app.post('/api/superheroes', async (req, res) => {
        const superhero = req.body;
        console.log(superhero);
        const validationResult = validator.isValid(superhero);

        if (!validationResult.isValid) {
            await wait(SECONDS_TO_WAIT);
            res.status(400)
                .send(validationResult);
            return;
        }

        const id = db.get('superheroes')
            .insert(superhero)
            .write().id;
        superhero.id = id;
        await wait(SECONDS_TO_WAIT);
        res.status(201)
            .send(superhero);
    });

    app.delete('/api/superheroes/:id', async (req, res) => {
        db.get('superheroes')
            .remove({
                id: req.params.id,
            })
            .write();
        await wait(SECONDS_TO_WAIT);
        res.send(true);
    });
};

module.exports = init;
