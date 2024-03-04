const express = require('express');

const app = express();

const start = async () => {
    try {
        app.listen(3000, () => {
            console.log('listening on port 3000');
        })
    } catch (err) {
        console.log(err)
    }
}
start()