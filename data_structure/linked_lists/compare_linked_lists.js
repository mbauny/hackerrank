// https://www.hackerrank.com/challenges/compare-two-linked-lists

/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */
function CompareLists(llist1, llist2) {
	if ((llist1 && !llist2) || (!llist1 && llist2)) {
		return 0;
	}

	let current1 = llist1;
	let current2 = llist2;
	while (true) {
		if (current1.data != current2.data) {
			return 0;
		}
		if (current1.next && current2.next) {
			current1 = current1.next;
			current2 = current2.next;
		} else if (!current1.next && !current2.next) {
			return 1;
		} else {
			return 0;
		}
	}
}
