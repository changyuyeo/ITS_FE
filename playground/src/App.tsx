import { Container } from './styled';
import { Avatar } from '@with-me/ui';

const App = () => {
	return (
		<Container>
			<Avatar nickname="제봉" clickable />
			<Avatar
				nickname="제봉"
				src="https://avatars.githubusercontent.com/u/80776262?v=4"
				clickable
			/>
		</Container>
	);
};

export default App;
