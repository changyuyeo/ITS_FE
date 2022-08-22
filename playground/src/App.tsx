import { Container, Wrapper } from './styled';
import {
	ArrowDown,
	ArrowLeft,
	ArrowRight,
	ArrowUp,
	BackSpace,
	Close,
	Code,
	Github,
	Heart,
	Like,
	Member,
	Members,
	Sharing,
	XCircle
} from '@with-me/icons';

const App = () => {
	return (
		<Container>
			<Wrapper>
				<ArrowDown />
				<ArrowLeft />
				<ArrowRight />
				<ArrowUp />
			</Wrapper>
			<Wrapper>
				<BackSpace />
				<Close />
				<Code />
				<Github />
				<Heart />
			</Wrapper>
			<Wrapper>
				<Like />
				<Member />
				<Members />
			</Wrapper>
			<Wrapper>
				<Sharing />
				<XCircle />
			</Wrapper>
		</Container>
	);
};

export default App;
