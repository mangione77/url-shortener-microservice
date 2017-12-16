require('dotenv').config()
const validateURL = require('../utils/validateURL')
const transformURL = require('../utils/transformURL')
const LinksDBService = require('../service/LinksDBService')
const parseURLController = {}

parseURLController.getURL = (req,res) => {

	let original_url = req.params.url

	const isAURL = validateURL.validate(original_url)
	
	if (isAURL) {
		LinksDBService.linkByOriginalURL(original_url)
			.then(link => {
				if (link == null) {
					const ID = transformURL.getNewID()
					LinksDBService.createLink(original_url,ID)
						.then(link => {
							res.json({
								"original_url":original_url,
								"short_url":link
							})
						})
						.catch(console.error)
				}
				else {
					res.json({
						"original_url":original_url,
						"short_url":link
					})
				}
			})
			.catch(console.error)
	}
	else {
		res.status(200).json({
			"message":"Please enter a valid URL. Maybe you forgot 'http://' or 'https://'"
		})
	}
		
}

module.exports = parseURLController