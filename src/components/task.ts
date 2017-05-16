import { Test } from './test';

import { createFunction, createReadMe, createTests } from '../task-constructors';


export interface TaskFunction {
    name: string;
    body: string;
    args: string[];
}

export interface TaskProps {
    title: string;
    markdown: string;
    taskFunction: TaskFunction;
    tests: Test[];
    numTests: number;
}

export class Task {

    title: string;
    markdown: string;
    taskFunction: TaskFunction;
    tests: Test[];
    numTests: number;

    public constructor(taskProps: TaskProps) {
        this.title = taskProps.title;
        this.markdown = taskProps.markdown;
        this.taskFunction = taskProps.taskFunction;
        this.tests = taskProps.tests;
        this.numTests = taskProps.numTests;
    }

    save(): void {
        createFunction(this.title, this.taskFunction.body);
        createReadMe(this.title, this.markdown);
        createTests(this.title, this.tests);
    }
}
