const Queue = (function () {
	class QueueNode {
		constructor(data, next = null) {
			this.data = data
			this.next = next
		}
	}

	class Queue {
		#first
		#last
		#size
		//Look in ./LinkedList.js to see other ways of declaring private instance fields https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Class_fields#Private_fields
		constructor() {
			this.#first = null
			this.#last = null
			this.#size = 0
		}

		get size() {
			return this.#size
		}

		enqueue(item) {
			const node = new QueueNode(item)
			if (this.#last) {
				this.#last.next = node
			}
			this.#last = node

			if (!this.#first) this.#first = this.#last
			this.#size++
		}

		dequeue() {
			if (!this.#first) return null
			const data = this.#first.data
			this.#first = this.#first.next
			if (!this.#first) this.#last = null
			this.#size--
			return data
		}

		peek() {
			if (!this.#first) return null
			return this.#first.data
		}

		isEmpty() {
			return this.#first === null
		}

		printQueue() {
			const result = []
			let curr = this.#first

			while (curr) {
				result.push(curr.data)
				curr = curr.next
			}
			console.log(result)
			return result
		}
	}
	return Queue
})()

module.exports = Queue
