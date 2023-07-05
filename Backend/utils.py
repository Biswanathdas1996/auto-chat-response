import os
import env
import openai
import mockUtils


env.addEnv()
openai.api_key = os.environ['OPEN_AI_KEY']
useMock = os.environ['USE_MOCK']


def generate_massage_reply(message):

    if useMock == "True":
        mockData = mockUtils.mockResponse("generate_massage_reply.json")
        return mockData['choices'][0]['text'].strip()

    context = "We provide lone to customer, having a credit score of more that 500. We offer multiple product including Health insurance, life insureance, car loane , home lone, personal lone, interest rate will depends on the credit score of the customer and can be in betwwen 9-15%."
    prompt = f"""Use the below article to make a professional, polite,  and positive sentiment and put some empathy to the reply of the Message. Make the english short and convertional"
            Article:
            \"\"\"
            {context}
            \"\"\"
            Message: {message}?"""

    response = openai.Completion.create(
        engine="text-davinci-003",
        prompt=prompt,
        max_tokens=100,
        temperature=0.6,
        n=1,
        stop=None,
        top_p=1.0,
        frequency_penalty=0.0,
        presence_penalty=0.0,
        best_of=1,
        timeout=30,
    )
    return response.choices[0].text.strip()


def get_sentiment(text):

    if useMock == "True":
        mockData = mockUtils.mockResponse("get_sentiment.json")
        return mockData['choices'][0]['text'].strip()

    task = "This is a sentiment classification task. Please classify the sentiment of the following text as positive, negative, or neutral:\n\nText: '{}'".format(
        text)
    response = openai.Completion.create(engine="text-davinci-003",
                                        prompt=task,
                                        max_tokens=256,
                                        temperature=0,
                                        top_p=1.0,
                                        frequency_penalty=0.0,
                                        presence_penalty=0.0)
    return response["choices"][0].text.strip()
