import * as cheerio from 'cheerio';
import { Test } from './components/test';

export const parseTest = (html) => {
    const $ = cheerio.load(html);
    if ($('div > div.-layout-h').length !== 4) {
        return null;
    }
    const test: Test = {
        input: [],
        expectedOutput: null,
    };
    for (let i = 2; i <= $('div > div.-layout-h').length; i++) {
        const elem = $(`div > div:nth-child(${i})`);
        const title = elem.find('div.task-tests--label').text().toLowerCase();
        if (title.includes('input')) {
            for (let j = 1; j <= elem.find('pre > div > b').length; j++) {
                const param = elem.find(`pre > div:nth-child(${j}) > b`).text().trim();
                const value = elem.find(`pre > div:nth-child(${j}) > b`)
                    .parent()
                    .text()
                    .replace(param, '')
                    .split('"').join(`'`)
                    .trim();
                test.input.push(value);
            }
        } else if (title.includes('expected output')) {
            test.expectedOutput = elem.find('pre').text().replace(':', '').trim();
        }
    }
    return test.expectedOutput === null ? null : test;
};
