import * as fs from 'fs';
import * as path from 'path';
import * as shell from 'shelljs';
import * as toMarkdown from 'to-markdown';
import { Test } from './components/test';
import { templates } from './templates';

const makePathString = (name) => path.join(__dirname, 'tasks', 'test', name);

const createTaskDir = (dir) => {
    if (!fs.existsSync(dir)) {
        console.log('Creating task directory \n\t' + dir);
        shell.mkdir('-p', dir);
    }
    return dir;
};

export const createPackageJson = () => {
    const dir = path.join(createTaskDir(makePathString('..')), 'package.json');
    if (!fs.existsSync(dir)) {
        console.log('Creating package file \n\t' + dir );
        fs.writeFileSync(dir, templates.packageJson);
    }
    return dir;
};

export const createReadMe = (taskName, markdownHtml) => {
    const dir = path.join(createTaskDir(makePathString(taskName)), 'README.md');
    console.log(`Creating task README file \n\t${dir}`);
    fs.writeFileSync(dir, toMarkdown(markdownHtml));
    return dir;
};

export const createFunction = (taskName, functionBody) => {
    const template = `${functionBody};\n\nexports.handler = function (event, context) {
        context.done(null, ${taskName}.apply(this, event.input));\n};\n`;
    const dir = path.join(createTaskDir(makePathString(taskName)), 'index.js');
    console.log(`Creating lambda for task \n\t${dir}`);
    fs.writeFileSync(dir, template);
    return dir;
};

export const createTests = (taskName, functionDir, tests: Test[]) => {
    const dir = createTaskDir(makePathString(taskName));
    console.log(`Creating test file \n\t${path.join(dir, `${taskName}Test.js`)}`);

    let t = '[';
    for (const test of tests) {
        // t.push({ input: test.input.toString(), expected: test.expectedOutput.toString()});
        t += `{ input: [${test.input.toString()}], expected: ${test.expectedOutput} },`;
    }
    t = t.replace(/,$/, '];');
    let testTemplate = templates.javaScript.replace('//lambdaPath', `'${path.join(functionDir)}'`);
    testTemplate = testTemplate.replace('//testName', `'${taskName}'`);
    testTemplate = testTemplate.replace('//tests', t);
    fs.writeFileSync(path.join(dir, `${taskName}Test.js`), testTemplate);
    return dir;
};
