import { Container } from './styled';
import { Button, Textarea } from '@with-me/ui';
import { ChangeEvent, useRef, useState } from 'react';

const App = () => {
	const ref = useRef<HTMLTextAreaElement>(null);
	const [value, setValue] = useState('');

	const onChange = (e: ChangeEvent<HTMLTextAreaElement>) => setValue(e.target.value);

	const onClick = () => {
		setValue('');
		if (ref) ref.current?.focus();
	};

	return (
		<Container>
			<Textarea value={value} onChange={onChange} />
			<Button onClick={onClick} type="error">
				Delete
			</Button>
		</Container>
	);
};

export default App;
