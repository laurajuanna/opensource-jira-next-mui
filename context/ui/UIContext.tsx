import { createContext } from 'react'

interface ContextProps {
    sidemenuOpen: boolean;
    isAddingEntry: boolean;

    // methods
    openSidemenu: () => void;
    closeSidemenu: () => void;

    setIsAddingEntry: (isAdding: boolean) => void;
}

export const UIContext = createContext({} as ContextProps);