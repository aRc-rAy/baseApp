import express from "express";

const app = express();

app.get("/", (req, res) => {
	res("Hello and welcome to my new app");
});
app.get("/login", (req, res) => {
	res("<h1>Kripya login nhi ariye</h1>");
});

app.listen(process.env.PORT, () => {
	console.log("App has been listening at the port");
});
