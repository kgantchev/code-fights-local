#!/usr/bin/env node
import * as program from 'commander';
import {loadTask} from '../src/task-loader';

program.version('1.0.0')
    .arguments('[URL]')
    .action(loadTask)
    .parse(process.argv);


