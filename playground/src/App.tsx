import { Container } from './styled';
import { Button, Textarea } from '@with-me/ui';
import { ChangeEvent, useRef, useState } from 'react';

const App = () => {
	const textAreaRef = useRef<HTMLTextAreaElement>(null);
	const buttonRef = useRef<HTMLButtonElement>(null);

	const [value, setValue] = useState('');

	const onChange = (e: ChangeEvent<HTMLTextAreaElement>) => setValue(e.target.value);

	// const onClick = () => {
	// 	setValue('');
	// 	if (ref) ref.current?.focus();
	// };

	return (
		<Container>
			<Textarea value={value} onChange={onChange} />
			<Button ref={buttonRef} type="error" onClick={() => console.log('ref test!')}>
				Delete
			</Button>
			<Button onClick={() => buttonRef.current && buttonRef.current.click()}>Test</Button>
		</Container>
	);
};

export default App;
