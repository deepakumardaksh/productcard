import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Success from './pages/Success'
import Home from './pages/Home'
import Error from './pages/Error'
import ProtectedRoute from './components/ProtectedRoute'

function App() {

  return (
    <>
<BrowserRouter>
<Routes>
  <Route path="/" element={<Home/>}/>
  <Route path='success' element={<ProtectedRoute element={<Success/>}/>}/>
  <Route path="/*" element={<Error/>}/>

</Routes>
</BrowserRouter>
    </>
  )
}

export default App
