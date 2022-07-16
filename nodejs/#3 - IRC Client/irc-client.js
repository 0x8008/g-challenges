// #3 - IRC Client
// 22.07.16 - ???

var irc = require('irc');
const { send } = require('process');
const readline = require('readline');

const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var irc_client = new irc.Client('irc.libera.chat', 'dupa555', {
    channels: ['#dupa2314234653456'],
});

function send_message(){
    input.question('Send message to channel: ', function(message){
        irc_client.say('#dupa2314234653456', message);
    });
};

irc_client.addListener('message', function(from,to,message){
    console.log(from + ' at channel ' + to + ': ' + message);
});

send_message();