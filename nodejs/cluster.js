/**
Worker threads and clusters ? 

Worker threads and clusters are two different approaches to leveraging the power of multiple CPUs in Node.js. 
While clusters create multiple instances of a Node.js process, each running on a separate CPU core, 
worker threads provide a way to create multiple threads within a single process.
 * 
 */
 
const express = require('express');
const cluster = require('cluster');

const os = require('os');
const app = express();

const numCpu = os.cpus().length;

app.get('/', (req, res) => {
  for (let i = 0; i < 1e8; i++) {
  }
  res.send(`OK...${process.pid}`);
  // cluster.worker.kill();
})


if(cluster.isMaster) {
  for (let i = 0; i < numCpu; i++) {
    cluster.fork();
  }
  cluster.on('exist', (worker, code, signal)=>{
    console.log(`worker ${worker.process.pid} died`);
    cluster.fork();
  });
} else {
  app.listen(3000, () => console.log(`server ${process.pid} http://localhost:3000`))
}