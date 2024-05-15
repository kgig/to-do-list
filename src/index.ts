import express from 'express';
import { json } from 'body-parser'
import { Router } from './routes';
const longestCommonPrefix = require('./longestCommonPrefix');

const app = express();
const port = 3000;

app.use(json())
app.use('/api/v1/dbms', Router)


const strings = ["flower","flow","flight"];
const strings2 = ["dog","racecar","car"];
console.log("Example 1 Longest common prefix:", longestCommonPrefix(strings));
console.log("Example 2 Longest common prefix:", longestCommonPrefix(strings2));

app.listen(port, async () => {
  console.log(`Server is running on http://localhost:${port}`);
});