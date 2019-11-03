// https://www.hackerrank.com/challenges/simple-text-editor

function processData(input) {
	//Enter your code here
	let string = "";
	const ops = [];

	function performOperation(op) {
		switch (op.type) {
			case 1: // append
				string += op.arg.toString();
				ops.push(op);
				break;
			case 2: // delete
				string = string.slice(0, -Number(op.arg));
				ops.push(op);
				break;
			case 3: // print
				console.log(string[Number(op.arg) - 1]);
				break;
		}
	}

	function undoLastOperation() {
		const removedOp = ops.splice(-1, 1)[0];
		switch (removedOp.type) {
			case 1: // append
			case 2: // delete
				string = removedOp.str;
				break;
		}
	}

	const splitInput = input.split("\n");
	for (let index = 1; index < splitInput.length; index += 1) {
		const tokens = splitInput[index].split(" ");
		const type = Number(tokens[0]);
		if (type === 4) {
			undoLastOperation();
		} else {
			performOperation({
				type: type,
				arg: tokens[1],
				str: string
			});
		}
	}
}
