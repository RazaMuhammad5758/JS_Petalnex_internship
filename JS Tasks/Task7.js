//traverse tree ak method h jis me all nodes of tree ko visit kia jata h

const tree = {
    name: 'root',
    children: [
      { name: 'child1', children: [] },
      { name: 'child2', children: [{ name: 'grandchild', children: [] }] }
    ]
  };
  
  function traverseTree(node) {
    // mojuda node ka name btaega
    console.log(node.name);
  
    // ak ak child ko traverse krega 
    if (node.children && node.children.length > 0) {
      node.children.forEach(child => traverseTree(child));
    }
  }
  
  
  traverseTree(tree);
  