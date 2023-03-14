import React from 'react';
import {Link} from 'react-router-dom'
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

function TabsSection() {
    const [Active, setActive] = React.useState(false);

    const handleChange = () => {
      setValue(!Active);
    };
  return (
    <div className="flex text-sm justify-center m-6">
        <Box
          sx={{
            maxWidth: { xs: 320, sm: 480, md: 1200 },
            bgcolor: "background.paper",
          }}
        >
          <Tabs
            value={Active}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons
            allowScrollButtonsMobile
            aria-label="scrollable force tabs example"
          >
           <Link to="/"> <Tab label="Missing Persons" /></Link>
            <Link to='/accidentalDeaths'><Tab label="Accidental Deaths" /></Link>
            <Link to='/womanHelpDesk'><Tab label="Woman Help Desk" /></Link>
            <Tab label="Crime Information" />
            <Tab label="Tips for Citizens" />
            <Tab label="Citizen Alert Wall" />
          </Tabs>
        </Box>
      </div>

  )
}

export default TabsSection;