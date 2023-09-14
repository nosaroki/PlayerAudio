import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getMusicsData } from '../features/playlist'

export default function Playlist() {
    const dispatch = useDispatch()
    const playlist = useSelector(state => state.playlist)

    if(!playlist.songs) {
        dispatch(getMusicsData())
    }

  return (
    <ul className='mt-4 mb-[300px]'>
        {playlist?.songs?.length && playlist.songs.map(song => (//seulement si j'ai des données je les map et les affiche / le "?" c'est pour retourner undefined plutôt qu'une erreur
        <li 
        key={song.id}
        className='p-2 border-2 border-amber-100 font-semibold bg-orange-500 hover:bg-orange-300 text-orange-100 mb-3 rounded cursor-pointer'>
            <span>{song.title} - </span>
            <span>{song.artist}</span>
        </li>
        ))}
    </ul>
  )
}
