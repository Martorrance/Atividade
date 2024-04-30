const express = require('express');
const bodyParser = require('body-parser');
const pgp = require('pg-promise')();
const db = pgp('postgres://pdaxzqqa:Y9dTvUVANRyGyuKsczaM_1hJGeCMT0Wq@silly.db.elephantsql.com/pdaxzqqa');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());4


app.get('/curriculum', async (req, res) => {
    try {
        const curriculos = await db.one('SELECT * FROM curriculum');
        res.json(curriculos);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
