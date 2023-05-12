const Emitter = require('events');

const event = new Emitter();

///// We can listen to multiple functions using same event
// event.on('handleText', () => {
//     console.log("my name is Ranjit")
// })
// event.on('handleText', () => {
//     console.log("my name is Bhagwan")
// })
// event.on('handleText', () => {
//     console.log("my name is Singh")
// })
// event.emit("handleText")


//// we can pass arguments and can read them
event.on("checkStatus", (sc, msg) => {
    console.log(`The status code is ${sc} and message is ${msg}`)
})
event.emit("checkStatus", 200, "Ok")