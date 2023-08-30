import express from 'express';
import bodyParser from "body-parser";


const app = express();
// 

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');


app.get("/", (req, res) => {
    res.render("index.ejs");
  });

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});