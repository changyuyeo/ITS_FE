import { Container } from './styled';
import { Button, Input, Textarea } from '@with-me/ui';
import { ChangeEvent, useEffect, useRef, useState } from 'react';

const App = () => {
	// const textAreaRef = useRef<HTMLTextAreaElement>(null);
	// const buttonRef = useRef<HTMLButtonElement>(null);
	const inputRef = useRef<HTMLInputElement>(null);
	const inputRef2 = useRef<HTMLInputElement>(null);

	// const [value, setValue] = useState('');

	// const onChange = (e: ChangeEvent<HTMLTextAreaElement>) => setValue(e.target.value);

	// // const onClick = () => {
	// // 	setValue('');
	// // 	if (ref) ref.current?.focus();
	// // };

	useEffect(() => {
		// inputRef.current?.focus();
		inputRef2.current?.focus();
	}, []);

	return (
		<Container>
			{/* <Textarea value={value} onChange={onChange} />
			<Button ref={buttonRef} type="error" onClick={() => console.log('ref test!')}>
				Delete
			</Button>
			<Button onClick={() => buttonRef.current && buttonRef.current.click()}>Test</Button> */}

			<Input ref={inputRef2} />
			<Input ref={inputRef} />
		</Container>
	);
};

export default App;
