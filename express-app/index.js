var express = require('express')
var instance1 = express()
var instance2 = express()

instance1.get('/appurl', function (req, res) {
  res.send('www.google.com')
})

instance1.get('/health', function (req, res) {
    //var status = { status : "UP"} 
    //res.send(status)
	 res.json({"status":"UP"});
})

instance1.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})

/*instance2.get('/appurl', function (req, res) {
  res.send('www.google.com')
})

instance2.get('/health', function (req, res) {
    //var status = { status : "UP"} 
    //res.send(status)
	 res.json({"status":"UP"});
})

instance2.listen(4000, function () {
  console.log('Example app listening on port 4000!')
})*/