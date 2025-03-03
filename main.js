// settings
const settings = document.querySelector('.settings')
const nameInput = document.querySelector('#event-name')
const dayInput = document.querySelector('#event-day')
const monthInput = document.querySelector('#event-month')
const yearInput = document.querySelector('#event-year')
const linkInput = document.querySelector('#event-img')

const saveBtn = document.querySelector('.save')

// app-body
const imageSection = document.querySelector('.image-section')
const eventSpan = document.querySelector('.event')
// const cardTitle = document.getElementsByClassName('.card-title')

const hoursCount = document.querySelector('.hours-count')
const daysCount = document.querySelector('.days-count')
const minutesCount = document.querySelector('.minutes-count')
const secondsCount = document.querySelector('.seconds-count')

const settingsBtn = document.querySelector('.options-btn')

let usersTime
linkInput.value = './img/default.jpg'

const setTime = () => {
	const currentTime = new Date()
	const result = usersTime - currentTime

	const days = Math.floor(result / 1000 / 60 / 60 / 24)
	const hours = Math.floor(result / 1000 / 60 / 60) % 24
	const minutes = Math.floor(result / 1000 / 60) % 60
	const seconds = Math.floor(result / 1000) % 60

	daysCount.textContent = days
	hoursCount.textContent = hours
	minutesCount.textContent = minutes
	secondsCount.textContent = seconds
}

const appUpdate = () => {
	eventSpan.textContent = nameInput.value
	// https://cdn.pixabay.com/photo/2022/02/24/14/28/art-7032570_1280.jpg
	imageSection.style.backgroundImage = `url('${linkInput.value}')`
	usersTime = new Date(
		`${monthInput.value} ${dayInput.value} ${yearInput.value}`
	)
	setTime()
}

// const openSettings = () => {
// 	if (settings.classList.contains('active')) {
// 		settings.classList.remove('active')
// 	} else {
// 		settings.classList.add('active')
// 	}
// }

settingsBtn.addEventListener('click', () => {
	settings.classList.toggle('active')
})
saveBtn.addEventListener('click', appUpdate)

appUpdate()
setInterval(setTime, 1000)
