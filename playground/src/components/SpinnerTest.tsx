import { Spinner } from '@with-me/ui';
import { Wrapper } from './styled';

const SpinnerTest = () => (
	<>
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
	</>
);

export default SpinnerTest;
