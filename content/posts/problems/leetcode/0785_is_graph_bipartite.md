---
title: 785. Is Graph Bipartite?
date: 2020-07-01
slug: 0785-is-graph-bipartite
link: https://leetcode.com/problems/is-graph-bipartite/
tags:
  - leetcode
  - graph
  - recursion
category: problems
---

> Note: Related problem - [886. Possible Bipartition](/posts/0886-possible-bipartition/)

### With BFS:

```js
var isBipartite = function (graph) {
	const adjList = graph,
		n = graph.length,
		visited = new Array(n).fill(-1),
		parent = new Array(n).fill(-1),
		distance = new Array(n).fill(-1)

	for (let v = 0; v < n; v++) {
		if (visited[v] === -1) {
			if (!bfs(v)) return false
		}
	}

	return true

	// -----------------------------------------------
	function bfs(source) {
		const queue = []
		queue.push(source)

		visited[source] = 1
		distance[source] = 0

		while (queue.length) {
			const node = queue.shift()
			for (const neighbor of adjList[node]) {
				if (visited[neighbor] == -1) {
					visited[neighbor] = 1
					parent[neighbor] = node
					distance[neighbor] = distance[node] + 1
					queue.push(neighbor)
				} else {
					// cycle
					if (parent[node] !== neighbor) {
						// not bipartite (odd length cycle found)
						// cross edges found in same layer are NOT bipartite
						if (distance[node] == distance[neighbor]) return false
					}
				}
			}
		}
		return true
	}
}
```

### With DFS:

```js
var isBipartite = function (graph) {
	const adjList = graph,
		n = graph.length,
		visited = new Array(n).fill(-1),
		parent = new Array(n).fill(-1),
		color = new Array(n).fill(-1)

	for (let v = 0; v < n; v++) {
		if (visited[v] === -1) {
			if (!dfs(v)) return false
		}
	}

	return true

	// -----------------------------------------------
	function dfs(source) {
		visited[source] = 1

		if (parent[source] === -1) color[source] = 0
		else color[source] = 1 - color[parent[source]]

		for (const neighbor of adjList[source]) {
			if (visited[neighbor] === -1) {
				parent[neighbor] = source
				if (!dfs(neighbor)) return false
			} else {
				if (color[source] === color[neighbor]) return false
			}
		}
		return true
	}
}

// Tests
console.log(
	isBipartite([
		[1, 2, 3],
		[0, 2],
		[0, 1, 3],
		[0, 2],
	])
)
console.log(
	isBipartite([
		[1, 2, 3],
		[0, 2],
		[0, 1, 3],
		[0, 2],
	])
)
```
