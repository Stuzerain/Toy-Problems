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

};