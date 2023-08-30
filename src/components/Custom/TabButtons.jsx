/* eslint-disable react/prop-types */
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { styled } from '@mui/material';

const CustomTabs = styled(Tabs)(({theme}) => ({
  padding: '5px',
  boxShadow: 'rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px',
  '& .MuiTabs-flexContainer': {
    justifyContent: 'space-between'
  },
  '& .MuiTab-root': {
    textTransform: 'capitalize',
    color: '#000'
  },
  '& .Mui-selected': {
    background: theme.palette.primary.main,
    color: '#ffffff',
    borderRadius: '15px'
  },
  '& .MuiTabs-indicator': {
    display: 'none'
  },
}))

export default function TabButtons({value, setValue}) {
  

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
      <CustomTabs value={value} onChange={handleChange} centered>
        <Tab label="Item One" />
        <Tab label="Item Two" />
        <Tab label="Item Three" />
      </CustomTabs>
    </Box>
  );
}