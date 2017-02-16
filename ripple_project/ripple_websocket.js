WebSocket = require('ws');

// Create a WebSocket object that connects to the Ripple Server
websocket = new WebSocket('wss://s1.ripple.com:443');

// When connection is open
websocket.on('open', () => {
	console.log('Connceted to the Ripple Payment Network!');

	// Subscribe to the network
	websocket.send('{"command":"subscribe","id":0,"streams":["ledger"]}');
});

// Ledger Closed events
websocket.on('message', message => {
	console.log('Message', message);
});
