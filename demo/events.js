const EventEmmiter = require('events');

const emitter = new EventEmmiter();

// emitter.on('anything', (data) => {
//   console.log('ON: anything: ', data);
// })

// emitter.emit('anything', {
//   a: 1
// })

// emitter.on('event', (a, b) => {
//   setImmediate(() => {
//     console.log('this happens asynchronously');
//   });
// });
// emitter.emit('event', 'a', 'b');

class Dispatcher extends EventEmmiter {
  subcribe(eventName, cb) {
    console.log('[Subcribe...]')
    this.on(eventName, cb)
  }

  dispatch(eventName, data) {
    console.log('[Dispatching...]')
    this.emit(eventName, data)
  }
}

const dis1 = new Dispatcher()

dis1.subcribe('eventName', data => {
  console.log('ON: eventName', data)
})

dis1.dispatch('eventName', {
  eventName: 22
})