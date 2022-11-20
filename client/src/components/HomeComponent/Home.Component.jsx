import React from 'react'
import unicornBikeImg from '../../assets/images/unicornbike.jpg'
import { Typography } from '@mui/material';
import Card from '@mui/material/Card';
import {CardContent} from '@mui/material';
import{ CardMedia }from '@mui/material';
import {useTheme} from '@mui/material';




const HomeComponent = () => {
	const theme = useTheme()
  return (
		<>
		
		  <Card sx={{
			  maxWidth: 600,
			  margin: 'auto',
			  marginTop: theme.spacing(15)
}}>
			  <Typography variant='h6' sx={{
				  padding: `${theme.spacing(3)}px ${theme.spacing(2.5)}px  ${theme.spacing(2)}px`,
				  color: theme.palette.openTitle
}}>
				Home Page
			</Typography>
			  <CardMedia sx={{ minHeight: 400 }}
			image={unicornBikeImg} title='Unicorn Bicycle'/>
			<CardContent>
				  <Typography variant="body2" component="p">
					  Welcome to the MERN Skeleton home page.
				  </Typography>
			</CardContent>

		</Card>
		</>
	);
}

export default HomeComponent