import { Telegraf } from 'telegraf';
import dotenv from 'dotenv';

dotenv.config();

export class Telegram {
    private token: string;
    private chatId: string;
    private bot: Telegraf;

    constructor() {
        this.token = process.env.TELEGRAM_TOKEN || '';
        this.chatId = process.env.TELEGRAM_CHAT_ID || '';
        this.bot = new Telegraf(this.token);

        console.log('Token:', this.token);
        console.log('Chat ID:', this.chatId);
        
        this.bot.launch();
    }

    public sendMessage(message: string) {
        this.bot.telegram.sendMessage(this.chatId, message)
            .then(() => console.log('Message sent successfully'))
            .catch((err) => console.error('Error sending message:', err));
    }
}
