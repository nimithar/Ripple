WebSocket = require('ws');

websocket = new WebSocket('wss://s1.ripple.com:443');

websocket.on('open', () => {
	console.log('Connceted to the Ripple Payment Network!')

	websocket.send('{"command":"subscribe","id":0,"streams":["ledger"]}');
});

websocket.on('message', message => {
	console.log('Message', message);
});