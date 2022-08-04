import styled from 'styled-components';
import { Spinner } from '@with-me/ui';

const Container = styled.div`
	width: 80%;
	margin: auto;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 100vh;
	gap: 10px;
`;

const Wrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 10px;
`;

const App = () => {
	return (
		<Container>
			<Wrapper>
				<Spinner color="primary" />
				<Spinner color="secondary" />
				<Spinner color="success" />
				<Spinner color="error" />
				<div style={{ background: '#333' }}>
					<Spinner color="white" />
				</div>
			</Wrapper>
			<br />
			<Wrapper>
				<Spinner size="sm" />
				<Spinner size="base" />
				<Spinner size="lg" />
			</Wrapper>
			<br />
			<Wrapper>
				<Spinner duration={300} />
				<Spinner duration={600} />
				<Spinner duration={1500} />
			</Wrapper>

			<div style={{ position: 'relative' }}>
				<Spinner isAbsolute />
			</div>
		</Container>
	);
};

export default App;
