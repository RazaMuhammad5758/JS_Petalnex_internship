function diff(oldTree, newTree) {
    // If the trees are completely different (different tag), return a replace patch
    if (oldTree.tag !== newTree.tag) {
      return [{ type: 'REPLACE', newTree }];
    }
  
    // If both are text nodes and their content is different, return a text update patch
    if (typeof oldTree === 'string' && typeof newTree === 'string') {
      if (oldTree !== newTree) {
        return [{ type: 'TEXT', newText: newTree }];
      }
      return []; // No changes needed
    }
  
    // If oldTree has children and newTree has children, compare them
    let patches = [];
  
    // Compare children
    const oldChildren = oldTree.children || [];
    const newChildren = newTree.children || [];
    const maxLength = Math.max(oldChildren.length, newChildren.length);
  
    for (let i = 0; i < maxLength; i++) {
      patches = patches.concat(diff(oldChildren[i], newChildren[i]));
    }
  
    return patches;
  }
  
  const oldTree = { tag: 'div', children: [{ tag: 'p', children: ['Hello'] }] };
  const newTree = { tag: 'div', children: [{ tag: 'p', children: ['World'] }] };
  
  console.log(diff(oldTree, newTree));
  