import { genAI } from "../utils/gemini_config";

export const getResponseForGivenPrompt = async (prompt) => {
  try {
    const model = await genAI.getGenerativeModel({ model: "gemini-pro" });

    const result = await model.generateContent(prompt);
    const response = await result.response;
    console.log("response of ai ", response);
    const text = await response.text();
    return text;
  } catch (error) {
    console.log("Something Went Wrong");
    return null;
  }
};
