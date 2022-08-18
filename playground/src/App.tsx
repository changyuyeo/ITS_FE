import { Container } from './styled';
import { Card } from '@with-me/ui';

const App = () => {
	return (
		<Container>
			<Card>test</Card>
			<Card title={<span>title</span>}>test</Card>
			<Card title={<span>title</span>} isShadow isBorder={false}>
				test
			</Card>
			<Card title={<span>title</span>} isShadow isHover isBorder={false}>
				test
			</Card>
			<Card isHover>hover</Card>
		</Container>
	);
};

export default App;
