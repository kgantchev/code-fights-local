# CodeFights Local

A simple command-line tool for creating a local instance of any CodeFights task.

## Installing globally

Installation via ```npm```:

```npm install code-fights-local -g```

This will install ```code-fights-local``` globally so that it may be run from the command line.

## Usage

```none

  Usage: code-fights-local [options] [URL]

  Options:

    -h, --help        output usage information
    -V, --version     output the version number
    -s, --show        shows the browser
    -i, --incognito   turns off the browser state persistance
    -t, --typescript  creates a typescript project for the task
    -c, --cpp         creates a C++ project for the task
    -j, --java        creates a Java project for the task

```

Create a local instance of a CodeFights task by invoking the ```code-fights-local``` script and pass in the URL of the task.

## Example

Invoking ```code-fights-local``` for the first arcade task, which is the ```wordLadder``` task.

```code-fights-local -s https://codefights.com/interview/EDaACHNYHyH6qQFAL```

The task will create a folder named ```./tasks/test/wordLadder``` in the same directory it was invoked. Note that this example is invoked with the `-s` option, which specifies that the browser should be shown while the application executes (useful if you want to see what it does).

## Output Folder Structure

The folder structure for each task looks like this:

```none

/tasks/package.json
/tasks/test/taskName
/tasks/test/taskName/index.js
/tasks/test/taskName/README.md
/tasks/test/taskName/taskNameTest.js

```

Where ```taskName``` is the name of the task which was downloaded. Back to our ```wordLadder``` example:

```index.js``` contains task function. It is the file where you will write your code.
```taskNameTest.js``` contains the tests and is the main entry point. It uses [mocha](https://mochajs.org/) to generate the tests. Each test is invoked in a [lambda-local](https://github.com/ashiina/lambda-local) context in order to simulate the test environment of CodeFights.

```none

/tasks/package.json
/tasks/test/wordLadder
/tasks/test/wordLadder/index.js
/tasks/test/wordLadder/README.md
/tasks/test/wordLadder/wordLadderTest.js

```

## Running Locally

Running the CodeFights task locally is pretty straightforward from here on. All you have to do is navigate to the ```/tasks``` directory and execute the test script:

```none

cd /tasks
npm install
npm run test

```
Don't forget to call npm install, so all of the node modules are installed prior to running the test script. 

## TODO

Please check the project page for more info on pending features and improvements: [https://github.com/kgantchev/code-fights-local/projects/1](https://github.com/kgantchev/code-fights-local/projects/1)
