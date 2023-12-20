import express from "express";
import dotenv from "dotenv";
dotenv.config();

const app = express();

app.get("/", (req, res) => {
	res.json({ name: "Dilip" });
});

app.get("/login", (req, res) => {
	res.send("<h1>Kripya login nhi ariye</h1>");
});

app.listen(process.env.PORT, () => {
	console.log("App has been listening at the port");
});
