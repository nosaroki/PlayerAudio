import React from 'react'
import { useSelector } from 'react-redux'

export default function PlayerPannel() {
    const playlist = useSelector(state => state.playlist)
    const actualSong = playlist.songs?.find(obj => obj.id === playlist.currentMusicID)
  
    console.log(actualSong)
  
    return (
    <div className='fixed w-full bottom-0 rounded border-t-2 border-amber-200 p-6 bg-gradient-to-r from-amber-100 to-orange-400'>
        <div className='max-w-[800px] mx-auto mb-2'>
            <p className='text-xl text-orange-700 font-semibold'>
                {playlist.songs && actualSong.title} {/* quand playlist.songs est true on envoie le titre */}
            </p>
            <div className='flex justify-between'>
                <p className='text-lg text-orange-700'>
                    {playlist.songs && actualSong.artist}
                </p>
                <p className='text-lg text-orange-700'>
                   {playlist.songs?.findIndex(song => song.id === playlist.currentMusicID) + 1} / {playlist.songs?.length}
                </p>
            </div>
        </div>
        <div className='flex justify-center items-center mb-5'></div>
    </div>
  )
}

