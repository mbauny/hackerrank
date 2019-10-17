// https://www.hackerrank.com/challenges/insert-a-node-at-the-head-of-a-linked-list

/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */
function insertNodeAtHead(head, data) {
	const newNode = new SinglyLinkedListNode();
	newNode.data = data;
	newNode.next = head;
	return newNode;
}
