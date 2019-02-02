const mockIndexData = require('./mock/mock1.json')
module.exports = {
  devServer: {
    host: 'localhost',
    port: '8080',
    before (app) {
      app.get('/api/mock1', (req, res) => {
        res.json(mockIndexData)
      })
    }
  }
}
