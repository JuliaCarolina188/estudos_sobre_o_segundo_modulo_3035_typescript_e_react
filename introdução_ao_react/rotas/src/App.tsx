import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {about} from './pages/about'
import {categories} from './pages/categories'
import { user } from './pages/user';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/sobre' element={about()} />
        <Route path='/categorias' element={categories()} />
        <Route path='/usuario' element={user()} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
