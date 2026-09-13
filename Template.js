import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.API_KEY,
  baseURL: process.env.BASE_URL,
});

const response = await client.chat.completions.create({
  model: "[模型名称]",
  messages: [
    { role: "user", content: "你好，请用一句话介绍人工智能。" },
  ],
});

console.log(response.choices[0].message.content);