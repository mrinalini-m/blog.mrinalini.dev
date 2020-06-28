---
title: 103. Binary Tree Zigzag Level Order Traversal
date: 2020-06-24
slug: 0103-binary-tree-zigzag-level-order-traversal
link: 'https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/'
tags:
  - leetcode
  - tree
category: problems
---

```js
// Same as level order traversal (Leetcode 102) but reverse the temp array alternatively before pushing to res

var zigzagLevelOrder = function(root) {
	const res = []
	if (!root) return res
	let q = [root],
		ltor = true //left-to-right flag

	while (q.length) {
		const numNodes = q.length,
			temp = []

		for (let i = 0; i < numNodes; i++) {
			const node = q.shift()
			temp.push(node.val)
			if (node.left) q.push(node.left)
			if (node.right) q.push(node.right)
		}
		// reverse alternating temp arr
		!ltor ? res.push(temp.reverse()) : res.push(temp)
		ltor = !ltor
	}

	return res
}
```
