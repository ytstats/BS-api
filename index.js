const express = require('express');
const app = express();

// const { Client } = require("brawlstars");
// const client = new Client("eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjA4YWNkZTgxLTQyNzMtNDA2NS1hZjQ5LWQ4ZTZlMmI2NTM5MyIsImlhdCI6MTY3NTc2Nzc0OSwic3ViIjoiZGV2ZWxvcGVyL2UwYzRmZTcxLTk5NjQtMGNmYi0yMWI5LTcyYjEzOGZkZmM3ZCIsInNjb3BlcyI6WyJicmF3bHN0YXJzIl0sImxpbWl0cyI6W3sidGllciI6ImRldmVsb3Blci9zaWx2ZXIiLCJ0eXBlIjoidGhyb3R0bGluZyJ9LHsiY2lkcnMiOlsiMTQ0LjQ4LjExNS4xNTMiXSwidHlwZSI6ImNsaWVudCJ9XX0.Quyb6CSN3N-T2TJPGOCq6K2sgtsjvnjasRute7ayZRaSmADo7QBlMrzqvqid9kTIU9Yy2ZHPy-6jvgPKfXdlSA", { 
//   cache: true, // default is true
//   cacheOptions: undefined /* options for node-cache, default is undefined. */
// });

app.get('/', (req, res) => {
  
// client.getPlayer("#QG09CUV8V")
// .then(data => {
//   const {nameColor, name, tag, icon,trophies, ...rest } = data;
  
//   res.send(rest);
// })
// .catch(err =>{
//   console.error(err)
//   res.send("error")
// });
const https = require("https");

https.get("https://ifconfig.co/ip", (res) => {
  let data = "";

  res.on("data", (chunk) => {
    data += chunk;
  });

  res.on("end", () => {
    console.log(data);
  });
}).on("error", (error) => {
  console.error(error);
});
res.send("hello")
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
