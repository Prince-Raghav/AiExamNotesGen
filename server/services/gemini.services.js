
const Gemini_URL = 
"https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent"
export const generateGeminiResponse = async (prompt) => {

    try {
         const response = await fetch(`${Gemini_URL}?key=${process.env.GEMINI_API_KEY}`,{
        method:"POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: prompt
                }
              ]
            }
          ]
        })

    })
const responseText = await response.text();

console.log("Gemini Status:", response.status);
console.log("Gemini Response:", responseText);

if (!response.ok) {
  throw new Error(responseText);
}

const data = JSON.parse(responseText);
    const text =
      data.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!text) {
      throw new Error("No text returned from Gemini");
    }

    const cleanText = text
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();

      return JSON.parse(cleanText);



    } catch (error) {
        console.error("Gemini Fetch Error:", error.message);
    throw new Error("Gemini API fetch failed");
    }
   
}