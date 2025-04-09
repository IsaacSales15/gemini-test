import express from "express";
import dotenv from "dotenv";
import GeminiService from "./GeminiService";

dotenv.config();

const app = express();
app.use(express.json());

const geminiService = new GeminiService();

app.post("/chat", async (req, res) => {
    const message = req.body.message;

    if (!message) {
        res.status(400).json({ error: "Message is required" });
        return;
    }

    const response = await geminiService.chat(message);
    res.json({ response });
});

app.listen(3000, () => {    
    console.log("Server started on port 3000");
});
