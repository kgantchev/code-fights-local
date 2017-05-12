import * as fs from 'fs';
import * as path from 'path';
import * as shell from 'shelljs';
import * as toMarkdown from 'to-markdown';

const createDir = (functionName) => {
    const dir = path.join(__dirname, 'tasks', functionName);
    if (!fs.existsSync(dir)) {
        console.log('Creating function directory \n\t' + dir);
        shell.mkdir('-p', dir);
    }
    return dir;
};

export const createReadMe = (functionName, markdownHtml) => {
    const md = toMarkdown(markdownHtml);
    const dir = createDir(functionName);
    console.log(`Creating function README file \n\t${path.join(dir, 'README.md')}`);
    fs.writeFileSync(path.join(dir, 'README.md'), md);
};

export const createFunction = (functionName, functionBody) => {
    const template = `${functionBody};\n\nexports.handler = function (event, context) {
        context.done(null, ${functionName}(event.input));\n};\n`;
    const dir = createDir(functionName);
    console.log(`Creating lambda function file \n\t${path.join(dir, 'index.js')}`);
    fs.writeFileSync(path.join(dir, 'index.js'), template);
};

export const createTests = (functionName) => {
    const dir = createDir(functionName);
    console.log(`Creating test file \n\t${path.join(dir, `${functionName}Test.js`)}`);
};
