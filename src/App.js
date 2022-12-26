import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Box } from "@mui/material"; // A box is basically a div with some shading and colors
import ExerciseDetail from './pages/ExerciseDetail';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer'

function App() {
  return (
   <Box width="400px" sx={{ width: { xl: '1488px' }}} m="auto">
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/exercise/:id" element={<ExerciseDetail/>}/> {/*which means that the id is going to be dynamic*/}
    </Routes>
    <Footer/>
   </Box>
  )
}

export default App;
