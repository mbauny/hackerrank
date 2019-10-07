// https://www.hackerrank.com/challenges/reverse-a-doubly-linked-list/problem
package linkedlists

// type DoublyLinkedListNode struct {
// 	data int32
// 	next *DoublyLinkedListNode
// 	prev *DoublyLinkedListNode
// }

// Complete the reverse function below.
func reverse(head *DoublyLinkedListNode) *DoublyLinkedListNode {
	if head == nil {
		return head
	}

	current := head
	for {
		current.prev, current.next = current.next, current.prev
		// checking prev instead of next because we already have switched these pointers
		if current.prev != nil {
			current = current.prev
		} else {
			return current
		}
	}
}
