const os = require('os');

console.log('Operational System', os.platform());
console.log('Processor Architechtory', os.arch());
console.log('CPU info', os.cpus());
console.log('Free memory RAM', os.freemem());
console.log('Total RAM', os.totalmem());
console.log('Home Directory', os.homedir());
console.log('Total uptime in seconds', os.uptime());