// https://www.hackerrank.com/challenges/print-the-elements-of-a-linked-list

/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */
function printLinkedList(head) {
	let current = head;
	while (current) {
		console.log(current.data);
		current = current.next;
	}
}
