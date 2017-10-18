Shortest Word

x Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.

SOLUTION:

const findShort = s => s.split(' ').map
(function derp(elem){return elem.length}).sort
(function sortnum(a,b){return a-b})[0]