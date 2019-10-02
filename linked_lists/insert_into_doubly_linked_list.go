// https://www.hackerrank.com/challenges/insert-a-node-into-a-sorted-doubly-linked-list
package linked_lists

// Complete the sortedInsert function below.

type DoublyLinkedListNode struct {
	data int32
	next *DoublyLinkedListNode
	prev *DoublyLinkedListNode
}

func sortedInsert(head *DoublyLinkedListNode, data int32) *DoublyLinkedListNode {
	newNode := &DoublyLinkedListNode{
		data: data,
	}

	// empty list
	if head == nil {
		return newNode
	}

	// must insert at the head of the list
	if head.data > newNode.data {
		newNode.next = head
		head.prev = newNode
		return newNode
	}

	current := head

	// at the end of the loop, current is either the end of the list
	// or the node after which the insertion should be done
	for current.next != nil && current.next.data < newNode.data {
		current = current.next
	}

	// At this point, current.next.data >= newNode.data
	newNode.next = current.next
	newNode.prev = current
	current.next = newNode

	if current.next != nil {
		current.next.prev = newNode
	}
	return head
}
