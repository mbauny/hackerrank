// https://www.hackerrank.com/challenges/insert-a-node-at-a-specific-position-in-a-linked-list
package linked_lists

// Complete the insertNodeAtPosition function below.

type SinglyLinkedListNode struct {
	data int32
	next *SinglyLinkedListNode
}

func insertNodeAtPosition(llist *SinglyLinkedListNode, data int32, position int32) *SinglyLinkedListNode {

	newNode := &SinglyLinkedListNode{
		data: data,
	}

	current := llist
	// Inserting at position means inserting BEFORE item currently at position
	for index := int32(0); index < position-1; index++ {
		current = current.next
	}

	newNode.next = current.next
	current.next = newNode
	return llist
}
