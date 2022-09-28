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

app.get("/", (req, res) => {
   res.redirect('home')
})

const recipeController = require('./controllers/recipes_controller')
app.use('/recipes', recipeController)

app.get('*', (req, res) => {
   res.render('error404')
})

app.listen(process.env.PORT)