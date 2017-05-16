import * as fs from 'fs';
import * as path from 'path';
import * as shell from 'shelljs';
import * as toMarkdown from 'to-markdown';
import {Test} from './components/test';

const makePathString = (name) => path.join(__dirname, 'tasks', name);

const createTaskDir = (dir) => {
    if (!fs.existsSync(dir)) {
        console.log('Creating task directory \n\t' + dir);
        shell.mkdir('-p', dir);
    }
    return dir;
};

export const createReadMe = (taskName, markdownHtml) => {
    const dir = createTaskDir(makePathString(taskName));
    console.log(`Creating task README file \n\t${path.join(dir, 'README.md')}`);
    fs.writeFileSync(path.join(dir, 'README.md'), toMarkdown(markdownHtml));
    return dir;
};

export const createFunction = (taskName, functionBody) => {
    const template = `${functionBody};\n\nexports.handler = function (event, context) {
        context.done(null, ${taskName}(event.input));\n};\n`;
    const dir = createTaskDir(makePathString(taskName));
    console.log(`Creating lambda for task \n\t${path.join(dir, 'index.js')}`);
    fs.writeFileSync(path.join(dir, 'index.js'), template);
    return dir;
};

export const createTests = (taskName, test: Test[]) => {
    const dir = createTaskDir(makePathString(taskName));
    console.log(`Creating test file \n\t${path.join(dir, 'test', `${taskName}Test.js`)}`);
    console.log(test);
    return dir;
};
