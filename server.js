const http = require('http');
const server = require('./config/express');
require('./config/database');

const PORT =  process.env.PORT || 8080;

server.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});
