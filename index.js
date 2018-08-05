const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000
const swag = require ('./src/swag_module');
let sass = require('sass');

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .get('/test_modules', (req, response) => {

       swag.getEMAdata('JFC', (sym, res)=>{
         console.log("RESULT: ", sym + ":" + res);
       });
       response.status(200).send('ok');
  } )
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))

sass.render({file: 'public/stylesheets/styles.scss'}, function(err, result) {
    if (err) throw err;
     console.log("css", result);

/* ... */ });
