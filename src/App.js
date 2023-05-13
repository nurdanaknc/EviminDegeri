import './App.css';
import Glass from './components/Glass';
import Harita from './components/Harita';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';


function App() {
  return (
    <div className="app" >
      <Grid container spacing={2} style={{alignItems: "stretch"}} direction="row">
        <Grid item xs={12} md={6} style={{}}>
          <Box  sx={{width: "100%"}}><Glass/></Box>
        </Grid>
        <Grid item xs={12} md={6} style= {{}}>
          <Box  sx={{width: "100%"}}>
            <Harita/>
          
          
          </Box>
        </Grid>
      </Grid>


    </div>
  );
}

export default App;
