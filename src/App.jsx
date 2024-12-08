import React, { useState } from 'react'
import './App.css'

const App = () => {
	const [title, setTitle] = useState('The full name will appear here.')

	const [formData, setFormData] = useState({
		firstName: '',
		lastName: '',
	})

	const handleChange = (event) => {
		setFormData({ ...formData, [event.target.name]: event.target.value })
	}

	const handleSubmit = (event) => {
		event.preventDefault()
		setTitle(`Your name is ${formData.firstName} ${formData.lastName}`)
		setFormData({
			firstName: '',
			lastName: '',
		})
	}

	return (
		<div>
			<h2>{title}</h2>
			<form onSubmit={handleSubmit}>
				<div>
					<label htmlFor="firstName">First Name: </label>
					<input
						id="firstName"
						name="firstName"
						value={formData.firstName}
						onChange={handleChange}
					/>
				</div>
				<div>
					<label htmlFor="lastName">Last Name: </label>
					<input
						id="lastName"
						name="lastName"
						value={formData.lastName}
						onChange={handleChange}
					/>
				</div>
				<button type="submit">Submit</button>
			</form>
		</div>
	)
}

export default App
