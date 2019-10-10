// https://www.hackerrank.com/challenges/delete-a-node-from-a-linked-list

/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */
function deleteNode(head, position) {
	if (position === 0) {
		const next = head.next;
		head.next = null;
		return next;
	}

	let pos = 0;
	let current = head;
	while (pos !== position - 1) {
		pos += 1;
		current = current.next;
	}

	// When removing the last element, no need to set a new next.
	current.next = current.next.next ? current.next.next : null;
	return head;
}
