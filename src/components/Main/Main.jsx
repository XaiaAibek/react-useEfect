import React, { useEffect, useState } from "react";
import "./Main.css"

const Main = () => {
	const storedCount = JSON.parse(localStorage.getItem("count"));
	const [count, setCount] = useState(storedCount);

	useEffect(() => {
		localStorage.setItem("count", JSON.stringify(count));
	}, [count]);

	return (
		<div className="contern">
			<input
				type="text"
				value={count}
				onChange={(e) => setCount(e.target.value)}
			placeholder="local storeg"
      />
		</div>
	);
};

export default Main;
