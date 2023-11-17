
const payload=JSON.parse(process.env.PAYLOAD);
console.log(payload)
const res=payload.resources
for(int i=0;i<res.length;i++){
  console.log(res[i])
}


