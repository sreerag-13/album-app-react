import logo from './logo.svg';
import './App.css';
import ViewAlbum from './components/ViewAlbum';
import AddAlbum from './components/AddAlbum';
import DeleteAl from './components/DeleteAl';
import SearchAl from './components/SearchAl';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
   <BrowserRouter>
   <Routes>

    <Route path='/' element={<AddAlbum/>}/>
    <Route path='/SearchAl' element={<SearchAl/>}/>
    <Route path='/DeleteAl' element={<DeleteAl/>}/>
    <Route path='/ViewAlbum' element={<ViewAlbum/>}/>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
