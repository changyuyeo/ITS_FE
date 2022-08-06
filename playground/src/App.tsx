import { Container, Wrapper } from './components/styled';
import { Divider, Text, Title } from '@with-me/ui';
// import ButtonTest from './components/ButtonTest';
// import SpinnerTest from './components/SpinnerTest';

const App = () => {
	return (
		<Container>
			{/* <ButtonTest /> */}
			{/* <SpinnerTest /> */}
			<Divider color="default" width={300} borderWidth={2} />
			<Divider color="description" width={300} />
			<Divider color="error" width={300} />
			<Divider color="guide" width={300} />
			<Divider color="primary" width={300} />
			<Divider color="secondary" width={300} />
			<Divider color="success" width={300} />
			<div
				style={{
					background: '#333',
					width: '100%',
					height: '10px',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center'
				}}
			>
				<Divider color="white" width={300} />
			</div>
		</Container>
	);
};

export default App;
