import { Spinner } from '@with-me/ui';
import styled from 'styled-components';

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
				<Spinner />
			</Wrapper>
		</Container>
	);
};

export default App;
