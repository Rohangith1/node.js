const EventEmitter = require("events");
const emitter = new EventEmitter();

emitter.on("checkPage", (data) => console.log("Event Occur", data.message));
emitter.on("checkPage", () => console.log("Event Occur"));
emitter.on("checkPage", (data,status) => console.log("Event Occur", data.message,status));

emitter.emit("checkPage", { message: "Hello World" },200);
