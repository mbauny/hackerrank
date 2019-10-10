// https://www.hackerrank.com/challenges/reverse-a-linked-list/

/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */
function reverse(head) {
	if (!head || !head.next) {
		return head;
	}

	let current = head;
	let prev = null;
	while (current) {
		const normalNext = current.next;
		current.next = prev;
		prev = current;
		current = normalNext;
	}
	return prev;
}
