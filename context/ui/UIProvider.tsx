import { useReducer, ReactNode } from 'react';
import { UIContext, uiReducer } from '.';

export interface UIState {
    sidemenuOpen: boolean;
}

const UI_INITIAL_STATE: UIState = {
    sidemenuOpen: false
}

export const UIProvider = ({ children }: { children: ReactNode }) => {

    const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE);

    const openSidemenu = () => {
        dispatch({ type: '[UI] - Open Sidebar' });
    }

    const closeSidemenu = () => {
        dispatch({ type: '[UI] - Close Sidebar' });
    }

    return (
        <UIContext.Provider value={{
            ...state, // ...actualiza el estado, es lo mismo que esto: sidemenuOpen: state.sidemenuOpen

            // methods, deben estar declarados en UIContext
            openSidemenu,
            closeSidemenu
        }}>
            {children}
        </UIContext.Provider>
    )
}