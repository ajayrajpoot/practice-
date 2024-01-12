/**
Each of the methods i.e. exec execFile spawn & fork is explained in this repo - with their respective file names.

exec - exec_demo.js
execFile - exec_file_demo.js (also uses somefile.sh)
spawn - spawn_demo.js
fork - fork_demo.js (also uses longtask.js)



-- spawn
Spawn() launches a new process with the available set of commands.
This method doesn’t generate a new V8 instance, and only a single copy of the node module is active on the processor.

---fork
fork() is a particular case of spawn() that generates a new instance of a V8 engine.
Multiple workers run on a single node code base for multiple tasks.


fork- The Fork method in Node.js creates a new child process that runs a separate Node.js 
instance and can be useful for running CPU-intensive tasks or creating a cluster of Node.js servers.


 */

/** exec */
const { exec } = require('child_process');

exec('pwd', (error, stdout, stderr) => {
  if (error) {
    console.log(`error: ${error.message}`);
    return;
  }
  if (stderr) {
    console.log(`stderr: ${stderr}`);
    return;
  } 
  console.log(`stdout: ${stdout}`);
});

/** execFile */
const { execFile } = require('child_process');

execFile('./somefile.sh', (error, stdout, stderr) => {
  if (error) {
    console.log(`error: ${error.message}`);
    return;
  }
  if (stderr) {
    console.log(`stderr: ${stderr}`);
    return;
  }
  console.log(`stdout: ${stdout}`);
});

///somefile.sh
/**
        #!/bin/bash

        ls -lh
        # pwd
        # find /
 */


/** spawn */

const { spawn } = require('child_process');

const child = spawn('find', ['/']);

child.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`);
});

child.stderr.on('data', (data) => {
  console.log(`stderr: ${data}`);
});

child.on('error', (error) => console.log(`error: ${error.message}`));

child.on('exit', (code, signal) => {
  if (code) console.log(`Process exit with code: ${code}`);
  if (signal) console.log(`Process killed with signal: ${signal}`);
  console.log(`Done ✅`);
});


/** fork */

const express = require('express');
const { fork } = require('child_process');

const app = express();

app.get('/one', (req, res) => {
  const sum = longComputation();
  res.send({ sum: sum });
});

app.get('/two', async (req, res) => {
  const sum = await longComputePromise();
  res.send({ sum: sum });
});

app.get('/three', (req, res) => {
  const child = fork('./longtask.js');
  child.send('start');
  child.on('message', (sum) => {
    res.send({ sum: sum });
  });
});

app.listen(3000, () => console.log('server on port 3000...'));

function longComputation() {
  let sum = 0;
  for (let i = 0; i < 1e9; i++) {
    sum += i;
  }
  return sum;
}

function longComputePromise() {
  return new Promise((resolve, reject) => {
    let sum = 0;
    for (let i = 0; i < 1e9; i++) {
      sum += i;
    }
    resolve(sum);
  });
}

/////longtask.js
/**
 *function longComputation() {
  let sum = 0;
  for (let i = 0; i < 1e9; i++) {
    sum += i;
  }
  return sum;
}

process.on('message', (message) => {
  if (message === 'start') {
    const sum = longComputation();
    process.send(sum);
  }
});
 */