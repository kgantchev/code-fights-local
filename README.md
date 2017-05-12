# CodeFights Local

A simple command-line tool for creating a local instance of any CodeFights task.

## Installing globally

Installation via ```npm```:

```npm install code-fights-local -g```

This will install ```code-fights-local``` globally so that it may be run from the command line.

## Usage

```code-fights-local [URL...]```

Create a local instance of a CodeFights task by invoking the ```code-fights-local``` script and pass in the URL of the task.

## Example

Invoking ```code-fights-local``` for the first arcade task, which is the ```add``` function.

```code-fights-local https://codefights.com/arcade/intro/level-1/jwr339Kq6e3LQTsfa```

The function will create a folder named ```./add``` in the same directory it was invoked.

## Output Folder Structure
