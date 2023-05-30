import Header from './components/header/Header'
import VoteModal from './components/modal/VoteModal'
import Timer from './components/timer/Timer'
import Competitors from './components/All competitors/Competitors'
import { Toaster } from 'react-hot-toast'
import { Route, Routes } from 'react-router'
const App = () => {
  return (
    <div className='app'>
      <Header />
      <Routes>
        <Route path='/allcompetitors' element = {<Competitors />}/>
      </Routes>
      <Toaster
  position="top-center"
  reverseOrder={false}/>
      <Timer />
      <Competitors />
      <VoteModal />
    </div>
  )
}
export default App
