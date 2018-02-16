const {
  Node,
  printNode,
  insert
} = require('./binary-tree');

console.log("Simple test of a binary tree.");

const sampleVals = [8, 2, 5, 15, 11, 10, 12];

// Make a root, then insert the remaining sample values.
const root = new Node(sampleVals[0]);
for (let val of sampleVals.slice(1)) {
  insert(val, root);
}

printNode(root);
