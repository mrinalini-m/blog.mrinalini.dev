---
title: 250. Count Univalue Subtrees
date: 2020-06-24
slug: 0250-count-univalue-subtrees
link: 'https://leetcode.com/problems/count-univalue-subtrees/'
tags:
  - leetcode
  - tree
category: problems
---

```js
// DFS - Bottom up Recursive
var countUnivalSubtrees = function (root) {
	// Overall
	if (!root) return 0

	let globalCount = 0
	dfs(root)
	return globalCount

	// Recursive helper
	function dfs(node) {
		// Base Case
		if (!node.left && !node.right) {
			globalCount++
			return true
		}
		// Recursive Case
		let amIUnival = true

		if (node.left) {
			const left = dfs(node.left)
			if (!left || node.val !== node.left.val) amIUnival = false
		}
		if (node.right) {
			const right = dfs(node.right)
			if (!right || node.val !== node.right.val) amIUnival = false
		}
		// Increase global count if me + both subtrees are unival
		if (amIUnival) globalCount++
		return amIUnival
	}
}
```
