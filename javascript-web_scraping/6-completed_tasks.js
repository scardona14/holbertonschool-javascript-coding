#!/usr/bin/node
const argv = process.argv;
const url = argv[2];
const request = require('request');
request(url, function (error, response, body) {
    if (error === null) {
        const tasks = JSON.parse(body);
        const dict = {};
        for (const task of tasks) {
            if (task.completed === true) {
                if (dict[task.userId] === undefined) {
                    dict[task.userId] = 1;
                } else {
                    dict[task.userId]++;
                }
            }
            console.log(dict);
        }
    }
});
