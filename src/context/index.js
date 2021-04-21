import React from 'react';
import useInitialState from '@hooks/useInitialState';

export const AppContext = React.createContext({});

const AppContextProvider = props => {
	const initialState = useInitialState();

	return <AppContext.Provider value={initialState}>{props.children}</AppContext.Provider>;
};

export default AppContextProvider;
