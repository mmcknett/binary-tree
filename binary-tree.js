function Node(x) {
  this.left = null;
  this.right = null;
  this.val = x;
}

function printNode(node) {
  if (node === null) return;
  printNode(node.left);
  console.log(node.val);
  printNode(node.right);
}

function insert(val, root) {
  if (root === null) throw "Can't insert a value into null!";
  if (root.val === val) return;
  if (root.val < val) {
      if (root.right === null) root.right = new Node(val);
      else insert(val, root.right);
  } else {
      if (root.left === null) root.left = new Node(val);
      else insert(val, root.left);
  }
}

module.exports = {
  Node,
  printNode,
  insert
};
