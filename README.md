# Project-4
## Mental Health Chatbot
### Group Members
Ryan Hernandez

William Nzoiwu

Wilnelia Aviles

David Cortez

### Overview
For our project, we decided to use machine learning to create a chatbot that could offer help or advice to users who may be struggling with their mental health. We first looked at mental health statistics in the US from 2011-2011, then used scikit learn and tensorflow to create a model that could interpret user input and offer various responses. Our project contains two notebooks for our visualizations and model creation, and a Javascript, HTML, and CSS file to run our model.

### Gathering the Data
For the dataset providing mental health stats, we found a csv file from Kaggle detailing adults stuggling with mental health from 2011-2021. It divided the data for individuals by state and year. It further detailed the race/ethnicity and gender of the group. It looked at 3 parameters of mental health issues:

Recent mentally unhealthy days among adults aged >= 18 years

At least 14 recent mentally unhealthy days among women aged 18-44 years

Postpartum depressive symptoms

We chose to focus on "recent mentally unhealthy days among adults aged >= 18 years" for our visualization and analysis, so the next step was to filter out the data we didn't need

### Cleaning the Data
Our dataset was not very clean to start, as the CSV file was not organized by state or year, and gender and race/ethnicity fell under the same column. Also, every state appeared numerous times in the dataset, to account for the each race and gender group in each state in each year. On top of that for each group it included the overall mean as well as the age adjusted mean, so our DataFrame had over 13,000 rows of data to start. To clean it up we made two separate DataFrames, one displaying the average amount of recent unhealthy days by gender, and the other by race or ethnicity. We also chose just to look at the overall mean value as opposed to the age adjusted mean to get a better understanding of the data. We then sorted each DataFrame by state and year and dropped any columns and rows with data we were not using.

### Analyzing the Data
With cleaner data were able to see the progression of mental health over time. We created bar graphs to help us visualize the data. We were able to see that the average recent mentally unhealthy days for adults in the US had gradually increased over the ten year period, which meant that mental health was declining. We also found that females on average had more mentally unhealthy days than men every year. Just out of curiousity we also looked at the same data just for the state of Texas, and found similar results.

### Creating the Model
After analyzing the data and seeing an overall delcine, we were able to see a need for our chatbot and began work on our model. To create our model we first found a JSON file with various prompts and responses to get responses for our model to give the user. We used WordNet Lemmatizer from the NLTK library to groups variants of the same word, then initialized the model with 2 hidden layers along with 2 dropout layers to prevent overfitting. The hidden layer used the ReLU activation function and the output layer uses Sigmoid.

### Training the Model
To train our mental health chatbot, we started with organizingand processing our data from A JSON file that contained various user  inputs and corresponding responses. Using the NLTK library, we broke down the inputs into simpler, base forms and removed any unnecessary punctuation to standardize our data. This process allowed us to create a structured dataset where each input was transformed into a numerical format that the chatbot could understand a technique known as bag of words. We then designed the chatbot’s brain using TensorFlow, layering it with Dense layers for processing and Dropout layers to prevent overfitting.

### Testing the Model
When testing our model it did perform very well at first, with having an accuracy of only about 25% . After testing the model some more, we were able to get it to an accuracy of about about 74%, and would give pretty accurate responses based on what the user asked it. However, it was a bit case-sensitive and sometimes could not understand the user based on the casingof their typed message. To optimize the model's performance, we fed it more sentences to get a wider range of responses to the different prompts the user could potentially give it. With more training we could likely improve our model's accuracy even more and get it close to being a real resource for individuals seeking help.

### Model Performance
The process was both rigorous and enlightening, involving the collection and cleansing of data to ensure our model could grasp the nuances of emotional expression. We leveraged the NLTK library for natural language processing, enabling our chatbot to dissect and comprehend user inputs at a granular level. Through iterative training, incorporating layers of neurons and employing strategies like dropout to mitigate overfitting, our model evolved. It learned not just to recognize words, but to perceive the emotions they convey, and respond in a manner that resonates with empathy and understanding. This project, at its core, was not just about technological innovation but about creating a bridge between AI and human emotion, offering a glimpse into a future where technology supports mental well-being.
