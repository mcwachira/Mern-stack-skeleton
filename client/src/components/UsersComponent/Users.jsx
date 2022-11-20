import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import PersonIcon from '@mui/icons-material/Person';
import { Paper, Typography , IconButton, Avatar, useTheme} from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchUsers } from '../../api/user/user';

const Users = () => {

  const theme = useTheme()
  const [users, setUsers] = useState([])
  
  const fetchUserData = async() => {
    const data = await fetchUsers()
    setUsers(data)
  }


  useEffect(() => {
    fetchUserData()

  }, [])
  return (
    <Paper variant='outlined square' elevation={3} sx={{
      maxWidth: 600,
      height:"auto",
      margin: 'auto',
      marginTop: theme.spacing(15),
      borderRadius:'10px',
      boxShadow: '10px 5px 10px 10px rgba(0, 0, 0, 0.35);'

}}>

<Typography variant='h4' textAlign={"center"}>
  All Users
</Typography>

<List>
  {users.map((user, index) => (
    <Link to={'/user/' + user._id } key={index}>
      <ListItem
        secondaryAction={
          <IconButton edge="end" aria-label="details">
            <ArrowForwardIcon />
          </IconButton>
        }
      >
        <ListItemAvatar>
          <Avatar>
            <PersonIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={user.name}/>

      </ListItem>

    </Link>
  ) )}

</List>
    </Paper>
  )
}

export default Users