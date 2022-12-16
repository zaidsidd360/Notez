import React, { ReactNode, useState } from 'react'
import styled from 'styled-components'

const Topbar = () => {
    const date = new Date

	// const [cords, setCords] = useState({x: 0, y: 0})
	// document.addEventListener("mousemove", (e: MouseEvent) => {
	// 	setCords({x: e.pageX, y: e.pageY})
	// })
	// console.log(cords)

	const days = [
		"Mon",
		"Tue",
		"Wed",
		"Thu",
		"Fri",
		"Sat",
		"Sun"
	]

	const months = [
		"Jan", "Feb", "Mar", "Apr",
		"May", "Jun", "Jul", "Aug",
		"Sep", "Oct", "Nov", "Dec"
	]

	let month = months[date.getMonth()]
	let day = days[date.getDay()]
	let dateToday = date.getDate()
	let hours = date.getHours()
	let minutes = date.getMinutes()

  	return (
		<TopMain>
			<h1>NoteZ</h1>
			<p>{`${day}  ${month}  ${dateToday}  ${date.getHours() < 10 ? 0 : ""}${hours}:${date.getMinutes() < 10 ? 0 : ""}${minutes}`}</p>
			<Btn> New Note</Btn>
		</TopMain>
  	)
}

const TopMain = styled.div`
    height: 10vh;
    width: 100vw;
    color: #fff;
    display: flex;
    justify-content: space-between;
	align-items: center;
	padding: 0 4em;
	font-weight: normal;
	h1 {
		letter-spacing: 5px;
	}
	p {
		font-size: 1.5em;
		font-weight: normal;
	}
`

const Btn = styled.button`
	position: relative;
	border: 1px solid white;
	display: flex;
	align-items: center;
	outline: none;
	color: #fff;
	/* background: linear-gradient( #000000, #000000 50%, #ff3700 50%, #00a2ff); */
	background: black;
	padding: 12.5px 25px;
	transition: all 200ms ease;
	font-size: 20px;

	&:hover {
		background-color: #fff;
		color: #000;
	}
`

export default Topbar