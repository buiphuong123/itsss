
import './App.css';

import React from 'react';

const useStudent = (studs) => {
	const [students] = React.useState(studs);
	const [index, setIndex] = React.useState(0);

	const updateIndex = (index) => {
		setIndex(index);
	};

	return [students[index], updateIndex];
};

function App() {
	const [currentIndex, setCurrentIndex] = React.useState(0);
	const [currentStudent, updateIndex] = useStudent(['Huyen', 'Hoa', 'Hung', 'Long']);

	React.useEffect(() => {
		updateIndex(currentIndex);
	}, [currentIndex, updateIndex]);

	const moveBack = () => {
		setCurrentIndex((currentIndex - 1 + 4) % 4);
	};

	const moveForward = () => {
		setCurrentIndex((currentIndex + 1) % 4);
	};
	
  return (
    <div>
			<div>学生一覧：[Huyen,Hoa,Hung,Long]</div>
			<div>位置：{currentIndex + 1}</div>
			<div>名前：{currentStudent}</div>
			<div style={{display: 'flex', flexDirection: 'row'}}>
				<button onClick={moveForward}>次に</button>
				<button onClick={moveBack}>前に</button>
			</div>
		</div>
  );
}

export default App;
