import Playlist from "./components/Playlist"
import AudioPlayer from "./components/AudioPlayer"
import PlayerPannel from "./layouts/Player/PlayerPannel"

function App() {
  return <>
  <div className="min-h-screen bg-orange-50 pt-20 px-4">
    <div className="max-width-xl mx-auto">
     <AudioPlayer />
      <h1 className="text-orange-800 text-2xl">YourPlayer - Your Songs</h1>
      <Playlist />
    </div>
  </div>
  <PlayerPannel />
  </>
}

export default App
