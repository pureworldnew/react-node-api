const express = require("express");
const app = express();

//serve the react app files
app.use(express.static(`${__dirname}/ui-react/build`));

app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello World!" });
});

const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`server running on http://localhost:${port}`);
});
