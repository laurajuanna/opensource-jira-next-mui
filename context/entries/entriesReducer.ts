import { EntriesState } from '.'

type EntriesActionType =
    | { type: '[Entries] - ActionName' }

// en la linea de abajo el nombre del const debe comenzar en minuscula
export const entriesReducer = (state: EntriesState, action: EntriesActionType): EntriesState => {

    switch (action.type) {

        //case '[Entries] - ActionName':
        //
        //    return {
        //        ...state,
        //   }

        default:
            return state;
    }
}