import { createContext } from 'react'

interface ContextProps {
    sidemenuOpen: boolean;

    // methods
    openSidemenu: () => void;
    closeSidemenu: () => void;
}

export const UIContext = createContext({} as ContextProps);