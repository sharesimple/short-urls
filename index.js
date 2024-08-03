const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const redirectUrl = process.env.REDIRECT_URL || 'https://sharesimple.de/api/download.php?id=';
const errorURL = process.env.ERROR_URL || 'https://sharesimple.de/';

// URLS can be either /:id or /:id/:pass
app.get('/:id/:pass?', (req, res) => {
    const id = req.params.id;
    const pass = req.params.pass;
    if (pass) {
        res.redirect(`${redirectUrl}${id}&pass=${pass}`);
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
