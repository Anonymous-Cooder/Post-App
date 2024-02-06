import React from "react";
let numbers = [1, 2, 3, 4];
const NumberList = ({ numbers }) => {
	// 1. forEach
	const renderForEach = () => {
		const renderedList = [];
		numbers.forEach((num) => {
			renderedList.push(<li key={num}>{num * 2}</li>);
		});
		return renderedList;
	};

	// 2. map
	const renderMap = () => {
		return numbers.map((num) => <li key={num}>{num * 2}</li>);
	};

	// 3. filter
	const renderFilter = () => {
		const filteredNumbers = numbers.filter((num) => num % 2 === 0);
		return filteredNumbers.map((num) => <li key={num}>{num}</li>);
	};

	// 4. reduce
	const calculateSum = () => {
		const sum = numbers.reduce((accumulator, num) => accumulator + num, 0);
		return <li>Total Sum: {sum}</li>;
	};

	return (
		<div>
			<ul>
				<li>Using forEach:</li>
				{renderForEach()}
			</ul>
			<ul>
				<li>Using map:</li>
				{renderMap()}
			</ul>
			<ul>
				<li>Using filter:</li>
				{renderFilter()}
			</ul>
			<ul>
				<li>Using reduce:</li>
				{calculateSum()}
			</ul>
		</div>
	);
};

export default NumberList;
