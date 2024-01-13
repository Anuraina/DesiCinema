import {BrowserRouter,Route,Routes} from 'react-router-dom'
import './App.css';
import { Navbar,Feed,ChannelDetail,SearchFeed,VideoDetail } from './components';
import { Box } from '@mui/material';


function App() {
// hello world
  return(
  <BrowserRouter>
  <Box sx={{ backgroundColor: "#000",color:'white' }}>
    <Navbar/>
 <Routes>
        <Route exact path="/"  element={<Feed />} />
        <Route path="/video/:id" element={<VideoDetail />} />
        <Route path="/channel/:id" element={<ChannelDetail />} />
        <Route path="/search/:searchTerm" element={<SearchFeed />} />
        <Route path="*" element={<p>Path not resolved</p>} />
      </Routes>
      </Box>
  </BrowserRouter>
  )

}

export default App;
