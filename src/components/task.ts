import { Test } from './test';

import { createFunction, createPackageJson, createReadMe, createTests } from '../task-constructors';

export interface TaskFunction {
    name: string;
    body: string;
}

interface TaskProps {
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
        createPackageJson();
        const fnDir = createFunction(this.title, this.taskFunction.body);
        createReadMe(this.title, this.markdown);
        createTests(this.title, fnDir, this.tests);
    }
}
