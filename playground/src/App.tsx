import { Container, Wrapper } from './styled';
import {
	Android,
	Angular,
	Aws,
	C,
	Cpp,
	Cs,
	Css,
	Deno,
	Django,
	Docker,
	Flutter,
	Go,
	Html,
	Java,
	Javascript,
	Kotlin,
	Kubernetes,
	Linux,
	Nodejs,
	Python,
	R,
	React,
	Ruby,
	Sass,
	Spring,
	Sql,
	Svelte,
	Swift,
	Typescript,
	Ubuntu,
	Vue
} from '@with-me/icons';

const App = () => {
	return (
		<Container>
			<Wrapper>
				<Android />
				<Angular />
				<Aws />
				<C />
				<Cpp />
				<Cs />
			</Wrapper>
			<br />
			<Wrapper>
				<Css />
				<Deno />
				<Django />
				<Docker />
				<Flutter />
				<Go />
			</Wrapper>
			<br />
			<Wrapper>
				<Html />
				<Java />
				<Javascript />
				<Kotlin />
				<Kubernetes />
				<Linux />
			</Wrapper>
			<br />
			<Wrapper>
				<Nodejs />
				<Python />
				<R />
				<React />
				<Ruby />
				<Sass />
			</Wrapper>
			<br />
			<Wrapper>
				<Spring />
				<Sql />
				<Svelte />
				<Swift />
				<Typescript />
				<Ubuntu />
				<Vue />
			</Wrapper>
		</Container>
	);
};

export default App;
