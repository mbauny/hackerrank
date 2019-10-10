// https://www.hackerrank.com/challenges/insert-a-node-at-the-tail-of-a-linked-list

/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */
function insertNodeAtTail(head, data) {
	const newNode = new SinglyLinkedListNode();
	newNode.data = data;

	if (!head) {
		return newNode;
	}

	let current = head;
	while (current.next != null) {
		current = current.next;
	}
	current.next = newNode;
	return head;
}
