import { Paper, List } from '@mui/material'
import React, { useContext, useMemo } from 'react'
import { EntryCard } from './EntryCard'
import { EntryStatus } from '@/interfaces'
import { EntriesContext } from '@/context/entries';

interface Props {
    status: EntryStatus;
}

export const EntryList = ({ status }: Props) => {

    const { entries } = useContext(EntriesContext);

    // eslint-disable-next-line no-alert
    const entriesByStatus = useMemo(() => entries.filter(entry => entry.status === status), [entries]);

    return (
        // acá irá un drag and drop
        <div>
            <Paper sx={{
                height: 'calc(100vh - 195px)', overflow: 'auto', backgroundColor: 'transparent', padding: '3px 5px'
            }}>
                {/* Cambiará dependiendo del drag and drop */}
                <List sx={{ opacity: 1, paddingTop: 1, paddingBottom: 3 }}>
                    {entriesByStatus.map((entry) => (
                        <EntryCard key={entry._id} entry={entry} />
                    ))}
                </List>
            </Paper>
        </div>
    )
}
