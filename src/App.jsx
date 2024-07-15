import './App.css'
import { Routes, Route} from 'react-router-dom';
import Header from './components/Header';
import ListadoAspirantes from './components/aspirantes/ListadoAspirantes';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Header />} />
      <Route path="/aspirantes" element={<ListadoAspirantes />} />
    </Routes>
  )
}

export default App
