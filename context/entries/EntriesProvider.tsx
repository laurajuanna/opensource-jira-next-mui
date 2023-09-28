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
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero atque facere maiores pariatur ullam harum, error laudantium culpa nemo doloribus unde nostrum autem distinctio facilis quas perferendis temporibus neque suscipit.',
            status: 'pending',
            createdAt: Date.now()
        },
        {
            _id: uuidv4(),
            description: 'Consequat enim nisi incididunt et irure ad excepteur tempor enim incididunt sunt quis.',
            status: 'in-progress',
            createdAt: Date.now() - 1000000
        },
        {
            _id: uuidv4(),
            description: 'Non occaecat magna minim nulla mollit commodo dolore enim.',
            status: 'finished',
            createdAt: Date.now() - 100000
        }
    ]
}

export const EntriesProvider = ({ children }: { children: ReactNode }) => {

    const [state, dispatch] = useReducer(entriesReducer, Entries_INITIAL_STATE);

    return (
        <EntriesContext.Provider value={{
            ...state
        }}>
            {children}
        </EntriesContext.Provider>
    )
}