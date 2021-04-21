import React from 'react';
import useInitialState from '@hooks/useInitialState';

const AppContext = React.createContext({});

const AppContextProvider = props => {
	const initialState = useInitialState();

	console.log(initialState);

	return <AppContext.Provider value={initialState}>{props.children}</AppContext.Provider>;
};

export default AppContextProvider;
