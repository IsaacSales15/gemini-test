import { GoogleGenerativeAI } from '@google/generative-ai';
import 'dotenv/config';

class GeminiService {
    private model: any;

    constructor() {
        const ai = new GoogleGenerativeAI(process.env.GEMINI_KEY!);
        this.model = ai.getGenerativeModel({ model: 'gemini-1.5-flash'})
    }

    async chat(message: string): Promise<string> {
        try {
            const context = `User: ${message}`;
            const response = await this.model.generateContent(context);

            return response.text();
        } catch (error) {
            console.log(error);
            return 'Error';
        }
    }
}

export default GeminiService;