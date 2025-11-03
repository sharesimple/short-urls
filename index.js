const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const redirectUrl = process.env.REDIRECT_URL || 'https://sharesimple.de/api/download.php?id=';
const errorURL = process.env.ERROR_URL || 'https://sharesimple.de/';

// URLS can be either /:id or /:id/:code
app.get('/:id/:code?', (req, res) => {
    const id = req.params.id;
    const code = req.params.code;
    if (code) {
        res.redirect(`${redirectUrl}${id}&code=${code}`);
    } else {
        res.redirect(`${redirectUrl}${id}`);
    }
});

app.get('/', (req, res) => {
    res.redirect(errorURL);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
