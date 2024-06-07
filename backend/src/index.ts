import express from "express";
import path from "path";
import { ExtendedApp } from "./entities/ExtendedApp";
import { Telegram } from "./integrations/telegram";

const App = new ExtendedApp(3000);

App.app.use('/assets', express.static(path.join(__dirname, 'public', 'assets')));

App.app.use(express.json());
App.app.use(express.urlencoded({ extended: true }));


App.app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});


const notification = new Telegram();
App.app.post("/message", (req, res) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).send("Missing fields");
    }

    notification.sendMessage(`Nova mensagem de ${name}\n<${email}>\n${message}`);
    return res.status(200).redirect("/");
});
App.start();