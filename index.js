import express from "express"; // Need to add {"type": "module"} in package.json

const app = express();

app.listen(8080, () => console.log(`Server running on port 8080.`));
