const transformURL = {}

transformURL.getNewID = () => {
	let randomNumber = Math.floor(100000 + Math.random() * 900000)
	return process.env.APP_URL+randomNumber
}

module.exports = transformURL