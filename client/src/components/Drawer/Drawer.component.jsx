import React, {useState} from 'react'
import { MenuRounded } from '@mui/icons-material'
import { Drawer, IconButton, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import { Link } from 'react-router-dom'

const DrawerComponent = ({links}) => {
    const [open, setOpen] = useState(false)
  return (<>
  
  
  <Drawer
  PaperProps={{
    sx:{backgroundColor:'rgba(49,49,116,1'}
  }} anchor='left' open={open} onClose={() => setOpen(false)}>

<List>
              {links.map((link, index) => (
                  <ListItemButton key={index} divider onClick={() => setOpen(false)} >
                      <ListItemIcon>
                          <ListItemText sx={{ color: 'black', width:'300px' }} >
                      <Link to={`/${link}`}>
                        {link}

                      </Link>
                        

                          </ListItemText>
                      </ListItemIcon>

                  </ListItemButton>

              ))}
</List>

  </Drawer>
  <IconButton
  sx={{marginLeft:'auto', color:'white'}} onClick={() => setOpen(true)}>
  
  <MenuRounded/>
  </IconButton>
  </>
  )
}

export default DrawerComponent