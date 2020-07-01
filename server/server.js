const express = require('express');

const song = require('./modules/song');
const artist = require('./modules/artist');

const app = express();
const PORT = 5000;

app.use(express.static('server/public'));

app.get('/artist', (req, res) => {   //server went and got the "/artists" file from the function
    res.send(artistListArray);    //sent a response to the client side of the array from above
});

// TODO - Add GET for songs

app.listen(PORT, () => {
    console.log('listening on port', PORT)
});


app.get('/song', (req, res) => {
    res.send(songListArray);
});