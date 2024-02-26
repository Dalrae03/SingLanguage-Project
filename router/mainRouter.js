const express = require('express'); //서버를 만들기 위해 필한 express도구 불러오기
const router = express.Router(); //주소를 만들 때 사용하는 도구
//express안의 app을 통해서도 주소를 만들 수 있긴 한다.


// 주소를 만들어주는 도구 get
router.get('/', function(req, res){
    let query = req.query;
    console.log(query)
    
    res.send({"Key":"Value"})
  })
  
router.get('/about', function(req, res){
    res.send('About Page')
  })


router.post("/postapi", function(req, res){
  let body = req.body;
  console.log(body)
  res.send('POST API')
})
  
module.exports = router  //router이라는 변수 밖으로 내보내기 -> app.js에서 사용하기 위함