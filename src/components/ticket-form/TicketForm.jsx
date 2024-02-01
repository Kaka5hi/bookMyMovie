import { useState } from 'react'
import {GrClose} from 'react-icons/gr'
import './ticket-form.css'

const TicketForm = ({showPopup, setShowForm, data, setShowPopUp}) => {

	const [userData, setUserData] = useState({
		userName:'',
		noOfSeats: ''
	})

	const [errorMsg, showErrorMsg] = useState(false)

	const calculatePrice = () => {
		const noOfSeats = parseInt(userData?.noOfSeats)
		if(!noOfSeats) {
			return 0
		}
		return 12 * noOfSeats
	}

	const handleBooking = () => {
		const noOfSeats = parseInt(userData?.noOfSeats)
		if (noOfSeats < 1 || !noOfSeats || userData?.userName === '') {
			showErrorMsg(true)
			setTimeout(() => {
				showErrorMsg(false)
			}, 2000)
		} else {
			const saveData = {
				userName: userData?.userName,
				totalSeats: noOfSeats,
				showName: data?.name,
				totalCost: calculatePrice()
			}
			const localData = JSON.parse(localStorage.getItem('booking'))
			if (localData === null) {
				localStorage.setItem('booking', JSON.stringify([saveData]))
			} else {

				const newSetOfData = [...localData, saveData]
				localStorage.setItem('booking', JSON.stringify(newSetOfData))
			}
			setShowForm(false)
			setShowPopUp(true)
		}
	}

	return (
		<div className='book-ticket-form'>
			<div className="inner">
				<div className="form-content">
					<span className='heading'>book your ticket</span>
					<p className='movie-name'>Movie name - {data?.name}</p>
					<input 
						className='input-field' 
						type="text" 
						placeholder='Enter user name' 
						value={userData?.userName} 
						name='userName'
						autoComplete='off'
						onChange={(e) => {
							setUserData(prev => {
								return {...prev, [e.target.name]: e.target.value}
							})
						}}
					/>
					<input 
						className='input-field' 
						type="number" 
						placeholder='Please enter no. of seats' 
						value={userData?.noOfSeats} 
						name='noOfSeats'
						autoComplete='off'
						min="1" 
						onChange={(e) => {
							setUserData(prev => {
								return {...prev, [e.target.name]: e.target.value}
							})
						}}
					/>
					{
						errorMsg && <span className='error-msg'>Input fields empty</span>
					}
					<p className='note'>Single ticket price - $12</p>
					<p className='total'>total: {calculatePrice()}</p>
					<button onClick={handleBooking}>book</button>
				</div>
				<div className="close-btn">
					<button onClick={() => setShowForm(false)}><GrClose /></button>
				</div>
			</div>
		</div>
	)
}

export default TicketForm