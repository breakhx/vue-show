const mockIndexData = require('./mock/mock1.json')
module.exports = {
  publicPath: './',
  devServer: {
    host: 'localhost',
    port: '8081',
    // lintOnSave: true,
    before (app) {
      app.get('/api/mock1', (req, res) => {
        res.json(mockIndexData)
      })
    }
  }
}
