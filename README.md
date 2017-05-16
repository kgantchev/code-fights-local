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

The task will create a folder named ```./tasks/wordLadder``` in the same directory it was invoked. Note that this example is invoked with the `-s` option, which specifies that the browser should be shown while the application executes (useful if you want to see what it does).

## Output Folder Structure

The folder structure for each task looks like this:

```none

/tasks/taskName
/tasks/taskName/index.js
/tasks/taskName/README.md
/tasks/taskName/test/sudoku2Test.js

```

Where ```taskName``` is the name of the task which was downloaded. Back to our ```wordLadder``` example:

```none

/tasks/wordLadder
/tasks/wordLadder/index.js
/tasks/wordLadder/README.md
/tasks/wordLadder/test/sudoku2Test.js

```