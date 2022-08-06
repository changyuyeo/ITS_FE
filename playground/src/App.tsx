import { Container, Wrapper } from './components/styled';
import { Text, Title } from '@with-me/ui';
// import ButtonTest from './components/ButtonTest';
// import SpinnerTest from './components/SpinnerTest';

const App = () => {
	return (
		<Container>
			{/* <ButtonTest /> */}
			{/* <SpinnerTest /> */}
			<Wrapper>
				<Title color="primary">title</Title>
				<Title color="secondary">title</Title>
				<Title color="success">title</Title>
				<Title color="error">title</Title>
				<Title color="defalut">title</Title>
				<Title color="description">title</Title>
				<Title color="guide">title</Title>
				<div style={{ background: '#333' }}>
					<Title color="white">title</Title>
				</div>
			</Wrapper>
			<Wrapper>
				<Title size="h1">title</Title>
				<Title size="h2">title</Title>
				<Title size="h3">title</Title>
				<Title size="h4">title</Title>
				<Title size="h5">title</Title>
				<Title size="h6">title</Title>
			</Wrapper>
			<Wrapper>
				<Title weight="thin">title</Title>
				<Title weight="light">title</Title>
				<Title weight="regular">title</Title>
				<Title weight="medium">title</Title>
				<Title weight="bold">title</Title>
			</Wrapper>
		</Container>
	);
};

export default App;
