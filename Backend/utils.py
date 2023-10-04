import os
import env
import openai
import mockUtils
import json
import autoprompt

env.addEnv()


openai.api_base = "https://soumenopenai.openai.azure.com"
openai.api_key = "3a5a6eba4d2546558d3fa749ef9fb5ce"
openai.api_type = "azure"
openai.api_version = "2023-03-15-preview"


useMock = os.environ['USE_MOCK']

context = {
    "user": "Sumit Roy",
    "dob": "22/07/1996",
    "currency": "INR",
    "policy": [
        {
            "policy_number": "PUB345TY7890",
            "turm_amount": "5 cr",
            "policy_name": "Life insurance policy term plan",
            "total_premium": "12000",
            "monthly_premium": "1000",
            "total_premium_paid": "3000",
            "last_billing_date": "15-08-2023",
            "next_billing_date": "15-09-2023",
            "coverage": [
                {
                    "covered_person": "Sumit Doe",
                    "dob": "22/07/1996"
                },
                {
                    "covered_person": "Priti Doe",
                    "dob": "01/07/1998"
                }
            ]
        },
        {
            "policy_number": "PUB34578345",
            "policy_name": "Max World Basic Health insurance plan",
            "total_premium": "24000",
            "monthly_premium": "2000",
            "total_premium_paid": "6000",
            "last_billing_date": "15-08-2023",
            "next_billing_date": "15-09-2023",
            "coverage": {
                "room": "Basic double sharing room",
                "ambulance": "Covered upto 5000 INR",
                "pre_existing_desiseas": " Will covered after 3 years of onboarding",
                "accidantal_coverage": "from next day of the onboarding",
                "terminal_desises": "from next mont of the onboarding",
                "sum_insured": "5,00,000"
            },
            "network_cashless_hospitals": [
                {
                    "name": "Woodland multispeciality hospital"
                },
                {
                    "name": "Appolo hospital"
                },
                {
                    "name": "Ruby hospital"
                },
                {
                    "name": "Desean hospital"
                },
                {
                    "name": "RN tegore hospital"
                }
            ],
            "health_issues_covered_under_cashless_claim": [
                "Heart attack",
                "Kidny stone",
                "Brain Tumote",
                "Blood suger",
                "Kidny transplant",
                "Liver issues"
            ],
            "contact_person": {
                "name": "Suman Das",
                "contact_no": "+91 6003898766"
            }
        }
    ]
}


def generate_massage_reply(message):

    with open('data/chat.json', 'r') as file:
        chatHistory = json.load(file)

    test = autoprompt.myName()
    print("=================>", test)
    if useMock == "True":
        mockData = mockUtils.mockResponse("generate_massage_reply.json")
        return mockData['choices'][0]['text'].strip()

    # context = "We provide lone to customer, having a credit score of more that 500. We offer multiple product including Health insurance, life insureance, car loane , home lone, personal lone, interest rate will depends on the credit score of the customer and can be in betwwen 9-15%."
    prompt = f"""You are a polite insurance guide who will help customer with there policy details.  Your name is Jan"
            Context:
            \"\"\"
            {context}
            \"\"\"
            Chat History:
            \"\"\"
            {chatHistory}
            \"\"\"
            Message: {message}?
            
             The following topics must be considered:
                          - Reply to the answer given
                          - Provide answer in the context of chat history provided
                          - if the the question is not from the given context say "I dont know"
                          - if and data asked out of the dataset say negative and asked him/her to contact customer care
            """

    response = openai.Completion.create(
        engine="Policy_GPT",
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
    response = openai.Completion.create(engine="Policy_GPT",
                                        prompt=task,
                                        max_tokens=256,
                                        temperature=0,
                                        top_p=1.0,
                                        frequency_penalty=0.0,
                                        presence_penalty=0.0)
    return response["choices"][0].text.strip()
