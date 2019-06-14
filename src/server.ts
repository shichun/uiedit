import app from './app'
;(async () => {
  try {
    app.listen(app.get('port'), () => {
      console.log('  App is running at http://localhost:%d in %s mode', app.get('port'), app.get('env'))
      console.log('  Press CTRL-C to stop\n')
    })
  } catch (err) {
    console.error(err)
  }
})()
