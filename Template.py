from openai import OpenAI
import os

client = OpenAI(
    api_key=os.getenv("API_KEY"),
    base_url=os.getenv("BASE_URL")
)

response = client.chat.completions.create(
    model="[模型名称]",
    messages=[
        {"role": "user", "content": "你好，请用一句话介绍人工智能。"}
    ]
)

print(response.choices[0].message.content)