#!/usr/bin/node
import { readFile } from 'fs';
const fdPath = process.argv[2];

readFile(fdPath, 'utf8', (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});