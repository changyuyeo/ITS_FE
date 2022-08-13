import { ChangeEvent, useState } from 'react';
import { Button, Input, Textarea } from '@with-me/ui';
import { Container, Wrapper } from './styled';

const App = () => {
	const [value, setValue] = useState('');
	const [error, setError] = useState(false);

	const onChangeValue = (e: ChangeEvent<HTMLTextAreaElement>) => setValue(e.target.value);

	return (
		<Container>
			{/* <Textarea value={value} onChange={onChangeValue} /> */}
			<Textarea autoSize suffix={<span>T</span>} />
			{/* <Textarea placeholder="테스트" disabled /> */}/
		</Container>
	);
};

export default App;
