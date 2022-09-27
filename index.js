require("dotenv").config();
const express = require("express");
const methodOverride = require('method-override')
const app = express();

// middleware
app.set("views", __dirname + "/views");
app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(methodOverride('_method'))

//controllers & routes

<<<<<<< HEAD
 app.get("/", (req, res) => {
    res.render('home')
 })
=======
app.get("/", (req, res) => {
   res.send('hello world')
})
>>>>>>> 4aaec3eabf26cddd3f0c00679e530cfef09dd879

const recipeController = require('./controllers/recipes_controller')
app.use('/recipes', recipeController)

app.get('*', (req, res) => {
   res.render('error404')
})

app.listen(process.env.PORT)