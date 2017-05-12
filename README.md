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

Invoking ```code-fights-local``` for the first arcade task, which is the ```add``` task.

```code-fights-local -s https://codefights.com/arcade/intro/level-1/jwr339Kq6e3LQTsfa```

The task will create a folder named ```./add``` in the same directory it was invoked. Note that this example is invoked with the `-s` option, which specifies that the browser should be shown while the application executes (useful if you want to see what it does).

## Output Folder Structure
