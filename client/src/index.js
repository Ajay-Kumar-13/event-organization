import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import HomeComponent from './components/HomeComponent';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.css';
import 'bootstrap-social/bootstrap-social.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CarnivalComponent from './components/CarnivalComponent';
import CreateEvent from './components/CreateEvent';
import Success from './components/success';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<App />} />
				<Route path="/home" element={<HomeComponent />} />
				<Route path="/register" element={<CarnivalComponent />} />
				<Route path="/createEvent" element={<CreateEvent />} />
				<Route path='/success' element={<Success />} />
			</Routes>
		</BrowserRouter>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
