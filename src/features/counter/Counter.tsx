import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset, incrementByNum } from "./counterSlice";

const Counter = () => {
	const [num, setNum] = useState(0);

	const count = useSelector((state: any) => state.counter.count);
	const dispatch = useDispatch();

	const resetAll = () => {
		dispatch(reset());
		setNum(0);
	};

	return (
		<section>
			<p>{count}</p>
			<div>
				<button onClick={() => dispatch(increment())}>+</button>
				<button onClick={() => dispatch(decrement())}>-</button>
			</div>

			<input
				type={"text"}
				value={num}
				onChange={(e) => setNum(Number(e.target.value) || 0)}
			/>

			<div>
				<button onClick={() => dispatch(incrementByNum(num))}>
					Add With Number
				</button>
				<button onClick={resetAll}>Reset All</button>
			</div>
		</section>
	);
};

export default Counter;
