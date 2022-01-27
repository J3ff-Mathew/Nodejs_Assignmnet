import events from 'events';
function xyz(num) {
    const eventEmitter = new events.EventEmitter();
    setTimeout(() => {
        for (let i = 0; i < num; i++) {
            eventEmitter.emit('before', i);
            console.log("number: " + i);
            eventEmitter.emit('after', i);
        }
    }, 3000);
    return eventEmitter;
}
const lp = xyz(4);
lp.on('before', data => { console.log('About to start : ' + data) });
lp.on('after', data => { console.log('Completed : ' + data) });