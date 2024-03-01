import { pagesData } from '../pagesData';
import {
	Container,
	Header,
	Title,
	Main,
	PageLink,
} from './components/UiElements';

const Home = () => {
	return (
		<Container>
			<Header>
				<Title>Frontend Mentor</Title>
			</Header>
			<Main>
				{pagesData.map((pageData) => (
					<PageLink
						to={pageData.path}
						key={pageData.id}
						colors={pageData.colors}
					>
						{pageData.title}
					</PageLink>
				))}
			</Main>
		</Container>
	);
};

export default Home;
