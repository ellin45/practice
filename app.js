const express = require('express');
const app = express();
const PORT = 8888;

app.set('view engine', 'ejs');
app.set('/views', 'views');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req,res)=>{
    console.log(req.query);
    res.render('index', { getForm: req.query});
  })

app.get('/result', (req,res)=>{
    console.log(req.query);
    res.render('result', { getForm: req.query });
})

app.listen(PORT, () => {
console.log(`${PORT} is opening!`);
});
  