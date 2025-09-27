import './App.css'
import PixelBlast from './components/PixelBlast/PixelBlast'
import { FloatingDockDemo } from './components/Header/FloatingDock'
import AiChat from './components/AI/Ai'

function App() {
  return (
    <div className="h-screen w-screen bg-black flex flex-col">
      {/* Header */}
 
        <FloatingDockDemo />
  

      {/* Main Content */}

        <PixelBlast />
        <AiChat/>
  
    </div>
  )
}

export default App
