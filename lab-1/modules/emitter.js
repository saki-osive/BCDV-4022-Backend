const Emitter = require('events');

const myEmitter = new Emitter;

function listenForCustomEvent(callback){
    myEmitter.on('customEvent', callback);
}

function emitCustomEvent(message) {
    myEmitter.emit('customEvent', message);
}

module.exports = {
    listenForCustomEvent,
    emitCustomEvent,
};
