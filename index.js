console.log("Hello")
console.log(process.env.PAYLOAD)
const payload=JSON.parse(process.env.PAYLOAD);
console.log("sys_id: ",payload.sys_id)
