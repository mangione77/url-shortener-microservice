const helloController = {}

helloController.get = (req,res) => {
	res.status(200).json({
		status:200,
		data:'Hello'
	})
}

module.exports = helloController