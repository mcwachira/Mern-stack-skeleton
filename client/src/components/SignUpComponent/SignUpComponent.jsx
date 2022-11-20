import React, {useState} from 'react'

import { TextField, Typography, Button } from '@mui/material'
import { Box } from '@mui/system'

const SignUpComponent = () => {
  
  const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    })

    const { name, email, password, confirmPassword } = formData;


    const handleChange = (e) => {
        const { name, value } = e.target

        setFormData((previousData) => ({
            ...previousData,
            [name]: value

        })
        )

    }

    const resetFormData = () => (
        setFormData({
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
        })

    )

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formData)

        resetFormData()

    }
    return (
        <div>

            <form onSubmit={handleSubmit}>

                <Box
                    display='flex'
                    flexDirection="column"
                    justifyContent="center"
                    alignItems='center'
                    maxWidth={400}
                    margin='auto'
                    marginTop={20}
                    padding={5}
                    borderRadius={10}
                    boxShadow={"5x 15px 10px #ccc"}
                    sx={{
                        ":hover": {
                            boxShadow: "5x 5px 10px #ccc",
                        }
                    }}>


                    <Typography variant='h4' padding={3} textAlign='center'>Sign Up</Typography>

                    <TextField name='name' value={name} type={'text'} margin='normal' variant='outlined' onChange={handleChange} placeholder='Name' />
                    <TextField name='email' value={email} type={'email'} margin='normal' variant='outlined' onChange={handleChange} placeholder='Email' />
                    <TextField name='password' value={password} type={'password'} margin='normal' variant='outlined' onChange={handleChange} placeholder='Password' />
                    <TextField name='confirmPassword' value={confirmPassword} type={'password'} margin='normal' variant='outlined' onChange={handleChange} placeholder='Confirm Password' />


                    <Button type='submit' variant='contained' color='warning' sx={{ marginTop: 2, borderRadius: 2 }}>

                         Sign Up

                    </Button>

                </Box>
            </form>




        </div>
  )
}

export default SignUpComponent