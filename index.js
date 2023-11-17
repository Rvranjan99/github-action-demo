
const payload=JSON.parse(process.env.PAYLOAD);
console.log(payload)
const res=payload.resources
res=JSON.parse(res)
for(let i=0;i<res.length;i++){
  console.log(res[i])
}


