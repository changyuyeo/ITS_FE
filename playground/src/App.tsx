import { ChangeEvent, useRef, useState } from 'react';
import { Button, Textarea } from '@with-me/ui';
import { Container } from './styled';

const App = () => {
	const textAreaRef = useRef<HTMLTextAreaElement>(null);

	const [value, setValue] = useState('');

	const onChange = (e: ChangeEvent<HTMLTextAreaElement>) => setValue(e.target.value);

	const onClick = () => {
		setValue('');
		if (textAreaRef) textAreaRef.current?.focus();
	};

	console.log(textAreaRef);

	return (
		<Container>
			<Textarea ref={textAreaRef} value={value} onChange={onChange} autoSize />
			<Button type="error" onClick={onClick}>
				Delete
			</Button>
		</Container>
	);
};

export default App;
