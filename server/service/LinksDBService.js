require('dotenv').config()
const Link = require('../models/linkSchema')

const LinksDBService = {}

LinksDBService.listLinks = () => {
	return new Promise((resolve,reject) => {
		Link.find()
			.then(links => {
				resolve(links)
			})		
	})
}

LinksDBService.linkByOriginalURL = (original_url) => {
	return new Promise((resolve,reject) => {
		if (!original_url)
			throw new Error('There must be an original url')
		Link.findOne({"original_url":original_url}, (err,link) => {
			if (err) console.log(err)

			resolve(link)
		})
	})
}

LinksDBService.linkByID = (id) => {
	return new Promise((resolve,reject) => {
		Link.findOne({"short_url":process.env.APP_URL+id}, (err,link) => {
			if (err) throw new Error

			resolve(link)
		})
	})
}

LinksDBService.createLink = (original_url,short_url) => {
	return new Promise((resolve,reject) => {

		const link = new Link({original_url,short_url})

		link.save()
			.then(link => {
				resolve(link)
			})
			.catch(console.error)
	})
}

module.exports = LinksDBService