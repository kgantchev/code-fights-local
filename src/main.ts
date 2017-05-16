import { browserOptions } from './config';
import { downloadTask } from './task-scraper';

browserOptions.show = true;

const url = {
    wordLadder: 'https://codefights.com/interview/EDaACHNYHyH6qQFAL',
    visiblePoints: 'https://codefights.com/interview/wjewD7BPuQDhfa5yx',
    sumOfTwo: 'https://codefights.com/interview/qAL6AiSejoJZRNyox',
    sumSubsets: 'https://codefights.com/interview/kEgA4DXcfXuriqGru',
};

downloadTask(url.sumSubsets);
// downloadTask(url.visiblePoints);
