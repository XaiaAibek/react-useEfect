import React, { useEffect, useState } from "react";


const MainSet = () => {
	const [inputValue, setInputValue] = useState("");

	useEffect(() => {
		console.log("Input length:", inputValue.length);
	}, [inputValue]);

	return (
		<div>
			<input
				type="text"
				value={inputValue}
				onChange={(e) => setInputValue(e.target.value)}
        placeholder="consol.log"
			/>
		</div>
	);
};

export default MainSet;
