import "./button.css";

const Button = ({ setCounts, type, countNum, counts, count }) => {
	const modifyCount = () => {
		if (type === "add" && count < 10) {
			// console.log("add");
			const tempCount = [...counts];
			tempCount[countNum] = tempCount[countNum] + 1;
			setCounts(tempCount);
		} else if (type === "sub" && count > 0) {
			// console.log("sub");
			const tempCount = [...counts];
			tempCount[countNum] = tempCount[countNum] - 1;
			setCounts(tempCount);
		} else if (type === "reset" && count > 0) {
			// console.log("reset");
			const tempCount = [...counts];
			tempCount[countNum] = 0;
			setCounts(tempCount);
		}
	};
	return (
		<>
			{type === "add" && (
				<button
					className={count >= 10 ? "hidden plus-minus" : "plus-minus"}
					onClick={modifyCount}>
					+
				</button>
			)}
			{type === "sub" && (
				<button
					className={count <= 0 ? "hidden plus-minus" : "plus-minus"}
					onClick={modifyCount}>
					-
				</button>
			)}
			{type === "reset" && <button onClick={modifyCount}>Reset</button>}
		</>
	);
};

export default Button;
