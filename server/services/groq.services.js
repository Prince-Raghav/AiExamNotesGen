import "dotenv/config";
import Groq from "groq-sdk";
const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});
export const generateGeminiResponse = async (prompt) => {
  try {
    const completion = await groq.chat.completions.create({
      model: "openai/gpt-oss-20b",
      temperature: 0.2,
      max_completion_tokens: 8000,
      messages: [
        {
          role: "user",
          content: prompt,
        },
      ],
    });
    console.log("Groq full response:", JSON.stringify(completion, null, 2));
    const text = completion.choices[0]?.message?.content;
    if (!text) {
      throw new Error("No response from Groq");
    }
    const cleanText = text
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();
    try {
      return JSON.parse(cleanText);
    } catch (parseError) {
      return { notes: cleanText, content: cleanText };
    }
  } catch (error) {
    console.error("Groq Error:", error);
    throw error;
  }
};
