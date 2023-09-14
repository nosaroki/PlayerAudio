import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    songs: undefined,
    play: false,
    currentMusicID: undefined
}

export const playlist = createSlice({ // On créé le créateur d'action, les cas de reduceur et le reduceur avec createslice qui prend pour objet les paramètres des caractéristiques de tout ça
    name: "playlist",
    initialState,
    reducers: {
        addBaseSongs: (state, action) => { // une fois qu'on a recu la musique on la rajoute à state.songs et au state 
            state.songs = action.payload
            state.currentMusicID = action.payload[0].id
        }
    }
})  

export function getMusicsData(action) {
    return function(dispatch, getState) {
        fetch("/data/playlist.json") 
        .then(data => data.json()) // retourner les données en JS et une fois qu'elles sont utilisables
        .then(data => dispatch(addBaseSongs(data.playlist))) // on les dispatch
    }
}

export default playlist.reducer
export const {addBaseSongs} = playlist.actions