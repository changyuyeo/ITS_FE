import { Container, Wrapper } from './components/styled';
import { Divider, Input, Text, Title } from '@with-me/ui';
import { ChangeEvent, useState } from 'react';
// import ButtonTest from './components/ButtonTest';
// import SpinnerTest from './components/SpinnerTest';

const App = () => {
	const [value, setValue] = useState('');
	const onChangeValue = (e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value);

	return (
		<Container>
			<Input size="base" value={value} onChange={onChangeValue} />
			<Input placeholder="입력해주세요" value={value} onChange={onChangeValue} />
		</Container>
	);
};

export default App;
