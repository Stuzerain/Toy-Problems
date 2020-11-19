// Given an absolute path for a file (Unix-style), simplify it. Or in other words, convert it to the canonical path.

// In a UNIX-style file system:
// The returned canonical path must always begin with a slash '/'.
// The last directory name (if it exists) must not end with a trailing '/'.
// There must be only a single slash '/' between two directory names.
// The canonical path must be the shortest string representing the absolute path.
// A period '.' refers to the current directory.
// A double period '..' moves the directory up a level.

// Example 1:

// Input: path = "/home/"
// Output: "/home"
// Explanation: Note that there is no trailing slash after the last directory name.

// Example 2:
// Input: path = "/../"
// Output: "/"
// Explanation: Going one level up from the root directory is a no-op, as the root level is the highest level you can go.

// Example 3:
// Input: path = "/home//foo/"
// Output: "/home/foo"
// Explanation: In the canonical path, multiple consecutive slashes are replaced by a single one.

// Example 4:
// Input: path = "/a/./b/../../c/"
// Output: "/c"

var simplifyPath = function(path) {
  // creates array with all characters between slashes, side effect is that slashes become an empty string
  let betweenSlashes = path.split('/');
  // removes all empty strings
  let noSpaces = betweenSlashes.filter(char => char !== '');
  // holds all directories that make it to the canonical path
  let slashlessPath = [];

  for (let i = 0; i < noSpaces.length; i++) {
    let char = noSpaces[i];
    // if we ever 'go back' a directory, we remove the most recent move
    if (char === '..') {
      slashlessPath.pop();
    }
    // we ignore '.' since it doesn't move us, and we have already dealt with '..' moving us 'back'
    // in all other cases we add the directory to our array
    if (char !== '.' && char !== '..') {
      slashlessPath.push(char)
    }
  }

  // join the array with a slash between all directories and a slash at the start to create canonical path
  return '/' + slashlessPath.join('/');
};