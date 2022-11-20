import React, {useState} from 'react'
import { AppBar, Button, Grid, Tab, Tabs, Toolbar, Typography, useTheme, useMediaQuery } from '@mui/material'
import { Link, Outlet } from 'react-router-dom'
import DrawerComponent from '../Drawer/Drawer.component'
const NavbarComponent = ({links}) => {


  const theme= useTheme()
  const isMatch = useMediaQuery(theme.breakpoints.down('md'))
  const [value, setValue] = useState(0)

  return (
    <div>
      <AppBar>


        <Toolbar>


{isMatch ? (
  <>
  
  <Typography>
                <Grid item xs={2}>
                  <Typography >
                    Mern
                  </Typography>
                </Grid>
  </Typography>

              <DrawerComponent links={links}/>
  </>
) : (

              <Grid container spacing={1} sx={{ placeItems: 'center' }}>
                <Grid item xs={2}>
                  <Typography >
                    Mern
                  </Typography>
                </Grid>

                <Grid item sx={{ marginLeft: 'auto' }}>
                  <Tabs indicatorColor='secondary' textColor='inherit' value={value}>
                    {links.map((link, index) => 
                 
                      <Link to={`/${link}`}>
                        <Tab key={index} label={link}/>

                      </Link>
                  )}

                  </Tabs>

                </Grid>
              </Grid>
)


}
        
        </Toolbar>
       
      </AppBar>
      <Outlet />
  
    </div>
    
  )
}

export default NavbarComponent