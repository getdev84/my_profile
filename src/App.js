/** @format */

import React from 'react';
import { Route, Switch } from 'react-router-dom';
import 'tachyons';
import Profile from './profile/profile';
import SmartBrainApp from './smart-brain-app/Smart-App';
import CrownApp from './crown-zip/CrownApp';
import './App.css';

function App() {
	return (
		<>
			<Switch>
				{/* <Route exact path='/' component={Profile} /> */}
				<Route exact path='/' component={SmartBrainApp} />
				{/* <Route  path='/cr' component={CrownApp} /> */}
			</Switch>
		</>
	);
}

export default App;
