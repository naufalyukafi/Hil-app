import React, { useState, createContext } from 'react';
import DATA from '../DATA.json';
import { IAbouts, IContext, IContextValue } from '../Helpers/types';

export const MyContext = createContext<IContextValue>({
    abouts: [], getAllAbouts: () => { },
});

function APIContexts(props: IContext) { 
    const [abouts, setAbouts] = useState<IAbouts []>([]);

    const getAllAbouts = async () => {
        const response = await DATA.about;
        return setAbouts(response);
    }

    const contextValue: IContextValue = {
        abouts, getAllAbouts
    };

    return (
        <MyContext.Provider value={contextValue}>
            {props.children}
        </MyContext.Provider>
    );
}

export default APIContexts;