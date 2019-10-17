// https://www.hackerrank.com/challenges/print-the-elements-of-a-linked-list-in-reverse

/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */
function reversePrint(head) {
	let current = head;
	let data = [];
	while (current) {
		data.push(current.data);
		current = current.next;
	}

	console.log(data.reverse().join("\n"));
}
