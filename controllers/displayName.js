const displayName = (req, res) => {
  const { name, surname } = req.query
  res.status(200).json({
    status: 'success',
    data: {
      message: `Hello ${name} ${surname}!`
    }
  })
}

module.exports = displayName
