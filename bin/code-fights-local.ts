#!/usr/bin/env node
import * as program from 'commander';
import { browserOptions } from '../src/config';
import { downloadTask } from '../src/task-scraper';

const notSupported = () => console.log(`Option not supported yet!`);

program.version('1.0.0')
    .option('-s, --show', 'shows the browser', () => browserOptions.show = true)
    .option('-i, --incognito', 'turns off the browser state persistance', () => {
        browserOptions.webPreferences.partition = 'incognito';
    })
    .option('-t, --typescript', 'creates a typescript project for the task', notSupported)
    .option('-c, --cpp', 'creates a C++ project for the task', notSupported)
    .option('-j, --java', 'creates a Java project for the task', notSupported)
    .arguments('[URL]')
    .action(downloadTask)
    .parse(process.argv);


