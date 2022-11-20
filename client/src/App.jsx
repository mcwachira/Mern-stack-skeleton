import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavbarComponent from './components/Navbar/Navbar.Component';
import Users from './components/UsersComponent/Users';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
function App() {
 
	const LinkArray = [ 'users', "signup", 'signin']
  return (
		<>
			<Routes>
				<Route path='/' element={<NavbarComponent links={LinkArray} />}>
				<Route index element={<Home />} />
				  <Route path='/users'  element={<Users />} />
				<Route path='/signup' element={<SignUp />} />
				<Route path='/signin' element={<SignIn />} />
			  </Route>
			
			</Routes>
	
		</>
	);
}

export default App
