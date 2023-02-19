import React from 'react';
import {useContext} from 'react';
import {Box, Typography,Tab} from '@mui/material/';
import {TabContext, TabList, TabPanel} from '@mui/lab/';
import Games from './games';

const Dashboard = () => {
  const [value, setValue] = React.useState('1');

   const handleChange = (event, newValue) => {
     setValue(newValue);
   };

  return(
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example" centered>
            <Tab sx={{textTransform:"none"}} label="Services" value="1" />
          </TabList>
        </Box>
        <TabPanel value="1"><Games/></TabPanel>
      </TabContext>
    </Box>
  )
}


export default Dashboard;
