import { ReactNode, useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { EntriesContext, entriesReducer } from '.';
import { Entry } from '@/interfaces';

export interface EntriesState {
    entries: Entry[];
}

const Entries_INITIAL_STATE: EntriesState = {
    entries: [
        {
            _id: uuidv4(),
            description: 'Pendiente: Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero atque facere maiores pariatur.',
            status: 'pending',
            createdAt: Date.now()
        },
        {
            _id: uuidv4(),
            description: 'En progreso: Consequat enim nisi incididunt et irure ad excepteur tempor enim incididunt sunt quis.',
            status: 'in-progress',
            createdAt: Date.now() - 1000000
        },
        {
            _id: uuidv4(),
            description: 'Terminada: Non occaecat magna minim nulla mollit commodo dolore enim.',
            status: 'finished',
            createdAt: Date.now() - 100000
        }
    ]
}

export const EntriesProvider = ({ children }: { children: ReactNode }) => {

    const [state, dispatch] = useReducer(entriesReducer, Entries_INITIAL_STATE);

    const addNewEntry = (description: string) => {
        const newEntry: Entry = {
            _id: uuidv4(),
            description: description,
            createdAt: Date.now(),
            status: 'pending'
        }

        dispatch({ type: '[Entry] - Add-Entry', payload: newEntry });
    }

    const updateEntry = (entry: Entry) => {
        dispatch({ type: '[Entry] - Entry-Updated', payload: entry })
    }

    return (
        <EntriesContext.Provider value={{
            ...state,
            // Methods
            addNewEntry,
            updateEntry
        }}>
            {children}
        </EntriesContext.Provider>
    )
}