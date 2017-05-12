import * as fs from 'fs';
import * as path from 'path';
import * as shell from 'shelljs';
import * as toMarkdown from 'to-markdown';

const makePathString = (name) => path.join(__dirname, 'tasks', name);

const createTaskDir = (path) => {
    if (!fs.existsSync(path)) {
        console.log('Creating task directory \n\t' + path);
        shell.mkdir('-p', path);
    }
    return path;
};

export const createReadMe = (taskName, markdownHtml) => {
    const path = createTaskDir(makePathString(taskName));
    console.log(`Creating task README file \n\t${path.join(path, 'README.md')}`);
    fs.writeFileSync(path.join(path, 'README.md'), toMarkdown(markdownHtml));
};

export const createFunction = (taskName, functionBody) => {
    const template = `${functionBody};\n\nexports.handler = function (event, context) {
        context.done(null, ${taskName}(event.input));\n};\n`;
    const dir = createTaskDir(makePathString(taskName));
    console.log(`Creating lambda for task \n\t${path.join(dir, 'index.js')}`);
    fs.writeFileSync(path.join(dir, 'index.js'), template);
};

export const createTests = (taskName) => {
    const dir = createTaskDir(makePathString(taskName));
    console.log(`Creating test file \n\t${path.join(dir, `${taskName}Test.js`)}`);
};
