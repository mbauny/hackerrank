// https://www.hackerrank.com/challenges/get-the-value-of-the-node-at-a-specific-position-from-the-tail

/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */
function getNode(head, positionFromTail) {
	let data = [];
	let current = head;
	while (current) {
		data.push(current.data);
		current = current.next;
	}
	return data[data.length - positionFromTail - 1];
}
