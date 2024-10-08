const express = require('express');
const router = express.Router();
const port = process.env.PORT || 3000;
const app = express();
app.use(express.json());
router.route('/api/v1/login').get((req,res)=>{
    res.send("Hello");
}).post();
app.use('/',router);
app.listen(port,()=>{
    console.log(`listening on port ${port}`);
})


