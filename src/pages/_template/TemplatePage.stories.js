import React from 'react';
import { useLocation, useHistory, MemoryRouter } from 'react-router-dom';

import TemplatePage from './TemplatePage.jsx';

export default {
	title: 'Containers/TemplatePage',
	component: TemplatePage,
	decorators: [
		(Story) => (
			<MemoryRouter
				initialEntries={['/']}
			>
				<Story />
			</MemoryRouter>
		),
	],
};

const Default = (args) => {
	const location = useLocation();
	const history = useHistory();
	return <TemplatePage location={location} history={history} {...args} />;
};
Default.args = {
};

export const LandingPage = Default.bind({});
LandingPage.args = {
	...Default.args,
};
