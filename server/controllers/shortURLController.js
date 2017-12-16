const LinksDBService = require('../service/LinksDBService')
const shortURLController = {}

shortURLController.redirect = (req,res) => {
	let id = req.params.id
	let original_url
	LinksDBService.linkByID(id)
		.then(link => {
			if (link == null) {
				res.json({
					"message":"Link does not exist"
				})
			}
			else {
				original_url = link.original_url
				res.redirect(original_url)
			}
		})
		.catch(console.error)
}

module.exports = shortURLController