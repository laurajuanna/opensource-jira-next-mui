import { Paper, List } from '@mui/material'
import React, { useContext, useMemo, DragEvent } from 'react'
import { EntryCard } from './EntryCard'
import { EntryStatus } from '@/interfaces'
import { EntriesContext, UIContext } from '@/context';
import styles from './EntryList.module.css';

interface Props {
    status: EntryStatus;
}

export const EntryList = ({ status }: Props) => {

    const { entries, updateEntry } = useContext(EntriesContext);
    const { isDragging, endDragging } = useContext(UIContext)

    // eslint-disable-next-line no-alert
    const entriesByStatus = useMemo(() => entries.filter(entry => entry.status === status), [entries]);

    const allowDrop = (event: DragEvent<HTMLDivElement>) => {
        event.preventDefault()
    }

    const onDropEntry = (event: DragEvent<HTMLDivElement>) => {
        const id = event.dataTransfer.getData('text')
        const entry = entries.find(entry => entry._id === id)!;
        entry.status = status;
        updateEntry(entry);
        endDragging();
    }

    return (
        // acá irá un drag and drop
        <div onDrop={onDropEntry} onDragOver={allowDrop} className={isDragging ? styles.dragging : ''}>
            <Paper sx={{
                height: 'calc(100vh - 195px)',
                overflow: 'auto',
                backgroundColor: 'transparent',
                padding: '3px 5px'
            }}>
                {/* Cambiará dependiendo del drag and drop */}
                <List sx={{ opacity: isDragging ? 0.2 : 1, transition: 'all .3s', paddingTop: 1, paddingBottom: 3 }}>
                    {entriesByStatus.map((entry) => (
                        <EntryCard key={entry._id} entry={entry} />
                    ))}
                </List>
            </Paper>
        </div>
    )
}
