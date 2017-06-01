
export const loginSelectors = {
    loginTab: 'body > div:nth-child(9) > div > div > div:nth-child(3) > div > div.landing--slogan.-home.-layout-v.-' +
    'padding-v-24-xs-gt.-padding-v-16-xs-lte > div > div.block.-inside-1280.-layout-h-s-gt.-layout-v-s-lte.-align-' +
    'center.-justify-center.-padding-64-s-gt.-padding-v-0-xs-gt.-padding-h-48-xs-gt.-padding-v-0-xxs-gt.-padding-h-' +
    '24-xxs-gt.-padding-v-0-xxs-lte.-padding-h-8-xxs-lte.-margin-v-0.-margin-h-40.-space-h-48-s-gt > ' +
    'div:nth-child(2) > div > div > div.tabs.-view-flat.-size-48 > div.-layout.-center > div.tabs--wrapper.-layout > ' +
    'div > div:nth-child(2) > div > span',
    emailField: 'body > div:nth-child(9) > div > div > div:nth-child(3) > div > div.landing--slogan.-home.-layout' +
    '-v.-padding-v-24-xs-gt.-padding-v-16-xs-lte > div > div.block.-inside-1280.-layout-h-s-gt.-layout-v-s-lte.' +
    '-align-center.-justify-center.-padding-64-s-gt.-padding-v-0-xs-gt.-padding-h-48-xs-gt.-padding-v-0-xxs-gt.-' +
    'padding-h-24-xxs-gt.-padding-v-0-xxs-lte.-padding-h-8-xxs-lte.-margin-v-0.-margin-h-40.-space-h-48-s-gt > ' +
    'div:nth-child(2) > div > div > div:nth-child(2) > div.-padding-h-24-xxs-gt.-padding-h-16-xxs-lte.-separator ' +
    '> div.-separator.-space-v-16.-padding-v-16.-align-left > div.-layout-h-xs-gt.-layout-v-xs-lte.-flex.-space-' +
    'h-16-xs-gt.-space-v-16-xs-lte > div:nth-child(1) > div > div > input[type="email"]',
    passwordField: 'body > div:nth-child(9) > div > div > div:nth-child(3) > div > div.landing--slogan.-home.-' +
    'layout-v.-padding-v-24-xs-gt.-padding-v-16-xs-lte > div > div.block.-inside-1280.-layout-h-s-gt.-layout-v-s' +
    '-lte.-align-center.-justify-center.-padding-64-s-gt.-padding-v-0-xs-gt.-padding-h-48-xs-gt.-padding-v-0-' +
    'xxs-gt.-padding-h-24-xxs-gt.-padding-v-0-xxs-lte.-padding-h-8-xxs-lte.-margin-v-0.-margin-h-40.-space-h-48-' +
    's-gt > div:nth-child(2) > div > div > div:nth-child(2) > div.-padding-h-24-xxs-gt.-padding-h-16-xxs-lte.-' +
    'separator > div.-separator.-space-v-16.-padding-v-16.-align-left > div.-layout-h-xs-gt.-layout-v-xs-lte.-' +
    'flex.-space-h-16-xs-gt.-space-v-16-xs-lte > div:nth-child(2) > div > div > input[type="password"]',
    loginButton: 'body > div:nth-child(9) > div > div > div:nth-child(3) > div > div.landing--slogan.-home.-layout' +
    '-v.-padding-v-24-xs-gt.-padding-v-16-xs-lte > div > div.block.-inside-1280.-layout-h-s-gt.-layout-v-s-lte.' +
    '-align-center.-justify-center.-padding-64-s-gt.-padding-v-0-xs-gt.-padding-h-48-xs-gt.-padding-v-0-xxs-gt.-' +
    'padding-h-24-xxs-gt.-padding-v-0-xxs-lte.-padding-h-8-xxs-lte.-margin-v-0.-margin-h-40.-space-h-48-s-gt > ' +
    'div:nth-child(2) > div > div > div:nth-child(2) > div.-layout-h.-center-center.-padding-16 > div > div',
    loginComplete: 'body > div:nth-child(9) > div > div.page--body.-margin-t-64.-flex > div > div > div > div > ' +
    'div:nth-child(1)',
};

export const taskSelectors = {
    taskTestLabelClass: 'task-tests--label',
    functionName: `body > div:nth-child(9) > div > div.page--header > div > span`,
    functionSignature: 'body > div:nth-child(9) > div > div.page--body.-margin-t-64.-flex > div > ' +
    'div.-layout.-stretch.-fit > div.split-panel--second.-layout.-vertical.-flex.-relative > div > ' +
    'div.-flex.-relative > div > div.-layout.-stretch.-fit.-vertical > div.split-panel--first.-layout.' +
    '-vertical.-flex.-relative > div > div.tabs-content.-theme-dark > div.source-editor > div > ' +
    'div.CodeMirror-scroll > div.CodeMirror-sizer > div > div > div > div.CodeMirror-code > ' +
    'div.CodeMirror-activeline > pre > span',
    markdown: 'body > div:nth-child(9) > div > div.page--body.-margin-t-64.-flex > div > div.-layout.-stretch.-fit > ' +
    'div.split-panel--first.-layout.-vertical.-flex.-relative > div > div.-layout-v.-flex.-bg-white > ' +
    'div.-flex.-relative > div > div > div.-flex.-scroll.-padding-16 > div',
    test: {
        section: 'body > div:nth-child(9) > div > div.page--body.-margin-t-64.-flex > div > div.-layout.' +
        '-stretch.-fit > div.split-panel--second.-layout.-vertical.-flex.-relative > div > div.-flex.-' +
        'relative > div > div.-layout.-stretch.-fit.-vertical > div.split-panel--second.-layout.-' +
        'vertical.-flex.-relative > div > div.tabs-content.-theme-dark > div > div.task-tests > div ' +
        '> div > div',
        getTestHead: (index) => {
            return `body > div:nth-child(9) > div > div.page--body.-margin-t-64.-flex > div > div.-layout.-stretch.` +
                `-fit > div.split-panel--second.-layout.-vertical.-flex.-relative > div > div.-flex.-relative > div` +
                ` > div.-layout.-stretch.-fit.-vertical > div.split-panel--second.-layout.-vertical.-flex.-relative` +
                ` > div > div.tabs-content.-theme-dark > div > div.task-tests > div > div:nth-child(${index})` +
                ` > div > div`;
        },
        body: 'body > div:nth-child(9) > div > div.page--body.-margin-t-64.-flex > div > div.-layout.-stretch.-fit > ' +
        'div.split-panel--second.-layout.-vertical.-flex.-relative > div > div.-flex.-relative > div > div.-layout.' +
        '-stretch.-fit.-vertical > div.split-panel--second.-layout.-vertical.-flex.-relative > div > ' +
        'div.tabs-content.-theme-dark > div > div.task-tests > div > div.accordion.-state-selected.-theme-dark > ' +
        'div.accordion--body',
        bodyLoaded: 'body > div:nth-child(9) > div > div.page--body.-margin-t-64.-flex > div > div.-layout.' +
        '-stretch.-fit > div.split-panel--second.-layout.-vertical.-flex.-relative > div > div.-flex.-relative > ' +
        'div > div.-layout.-stretch.-fit.-vertical > div.split-panel--second.-layout.-vertical.-flex.-relative > ' +
        'div > div.tabs-content.-theme-dark > div > div.task-tests > div > div.accordion.-state-selected.-theme-' +
        'dark > div.accordion--body > div > div:nth-child(5) > div',
    },
};
