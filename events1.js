import events from 'events';
const eventEmitter = new events.EventEmitter();
const add = () => console.log(5 + 2);
const sub = () => console.log(22 - 10);
eventEmitter.on('calc', add);
eventEmitter.on('calc', sub);
eventEmitter.emit('calc');
eventEmitter.removeListener('calc', add);
eventEmitter.emit('calc');