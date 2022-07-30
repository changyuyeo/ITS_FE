import { Button } from '@with-me/ui';
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
				<Button type="primary">test</Button>
				<Button type="secondary">test</Button>
				<Button type="success">test</Button>
				<Button type="error">test</Button>
				<Button type="gray">test</Button>
				<Button type="dark">test</Button>
			</Wrapper>
			<Wrapper>
				<Button outline type="primary">
					test
				</Button>
				<Button outline type="secondary">
					test
				</Button>
				<Button outline type="success">
					test
				</Button>
				<Button outline type="error">
					test
				</Button>
				<Button outline type="gray">
					test
				</Button>
				<Button outline type="dark">
					test
				</Button>
			</Wrapper>
			<Button fullSize>test</Button>
			<Wrapper>
				<Button size="sm">test</Button>
				<Button size="base">test</Button>
				<Button size="lg">test</Button>
			</Wrapper>
			<Wrapper>
				<Button disabled type="primary">
					test
				</Button>
				<Button disabled type="secondary">
					test
				</Button>
				<Button disabled type="success">
					test
				</Button>
				<Button disabled type="error">
					test
				</Button>
				<Button disabled type="gray">
					test
				</Button>
				<Button disabled type="dark">
					test
				</Button>
			</Wrapper>
			<Button icon={<span>I</span>}>test</Button>
			<Button loading>test</Button>
		</Container>
	);
};

export default App;
