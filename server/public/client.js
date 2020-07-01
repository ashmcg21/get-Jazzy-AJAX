$(document).ready(onReady);

function onReady() {
    $.ajax({   //the call to communicate between client and server
        type: 'GET',
        url: '/artist'
    }).then(function (response) {    //gets response from the server
        for (let i = 0; i < response.length; i++) {
            let artist = response[i];     //looping through the array
            $('#artistTableBody').append(`
                <tr>
                    <td>${artist.name}</td>
                    <td>${artist.born}</td>
                    <td>${artist.died}</td>
                </tr>
            `);   //sending the looped through array to the table on the DOM
        }
    });
// TODO Add ajax request for /songs and display on DOM
    $.ajax({
        type: 'GET',
        url: '/song'
    }).then(function (response) {
        for (let i = 0; i < response.length; i++) {
            let song = response[i];
            $('#songTableBody').append(`
                <tr>
                    <td>${song.title}</td>
                    <td>${song.artist}</td>
                </tr>
            `); 
        }
    });
    
}