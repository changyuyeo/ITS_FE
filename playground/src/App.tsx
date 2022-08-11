import { ChangeEvent, useState } from 'react';
import { Button, Input } from '@with-me/ui';
import { Container, Wrapper } from './styled';

const App = () => {
	const [value, setValue] = useState('');
	const [error, setError] = useState(false);

	const onChangeValue = (e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value);

	return (
		<Container>
			<Button type="error" onClick={() => setError(prev => !prev)}>
				Error!
			</Button>
			<Wrapper>
				<Input size="sm" value={value} onChange={onChangeValue} />
				<Input size="base" value={value} onChange={onChangeValue} />
				<Input size="lg" value={value} onChange={onChangeValue} />
			</Wrapper>
			<Input placeholder="입력해주세요" value={value} onChange={onChangeValue} />
			<br />
			<Input
				placeholder="에러 반응!"
				error={error}
				errorMsg={'응애'}
				value={value}
				onChange={onChangeValue}
			/>
			<br />
			<Input placeholder="비밀번호" password />
		</Container>
	);
};

export default App;
