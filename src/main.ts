import { browserOptions } from './config';
import { downloadTask } from './task-scraper';

browserOptions.show = true;

const testUrls = {
    wordLadder: 'https://codefights.com/interview/EDaACHNYHyH6qQFAL',
    visiblePoints: 'https://codefights.com/interview/wjewD7BPuQDhfa5yx',
    sumOfTwo: 'https://codefights.com/interview/qAL6AiSejoJZRNyox',
    sumSubsets: 'https://codefights.com/interview/kEgA4DXcfXuriqGru',
    treeLevelSum: 'https://codefights.com/interview/oqQqEcGhoB2wHswx6',
    sudoku2: 'https://codefights.com/interview/2szSXxzqWuAJKProX',
    tripletSum: 'https://codefights.com/interview/MZnrYnavhHmYEwZs8',
    textJustification: 'https://codefights.com/interview/ibANT8ZGc3shACBRF',
    swapLexOrder: 'https://codefights.com/interview/vG6SManzGDZsoqsh7',
};

const main = () => {
    downloadTask(testUrls.wordLadder);
};

main();
