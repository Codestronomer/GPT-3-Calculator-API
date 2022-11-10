# GPT-3 Calculator API
> A simple endpoint based On the REST API architecture that performs basic arithmetic calculations.
> Live demo [_here_](https://murmuring-castle-28179.herokuapp.com/). <!-- If you have the project hosted somewhere, include the link here. -->

## Table of Contents
* [General Info](#general-information)
* [Technologies Used](#technologies-used)
* [Features](#features)
* [Screenshots](#screenshots)
* [Setup](#setup)
* [Usage](#usage)
* [Project Status](#project-status)
* [Acknowledgements](#acknowledgements)
* [Contact](#contact)
<!-- * [License](#license) -->


## General Information
- Performs arithmetic operations using OPENAI's gpt-3 AI model based on prompt's supplied
- One POST endpoint on "/".
- Done as a stage-two task for HNGi9 backend internship
<!-- You don't have to answer all the questions - just the ones relevant to your project. -->


## Technologies Used
- Node.js - version 16.0
- Express.js
- OpenAI's GPT-3 - cabbage model


## Features
- Basic mathematical operations


## Screenshots
![image](https://user-images.githubusercontent.com/56360107/201122220-015ad14d-3a02-4006-9668-af9d6d29f39a.png)
<!-- If you have screenshots you'd like to share, include them here. -->


## Setup
To continue, you need to have Node installed. You can download [here](https://nodejs.org/en/download/).
To set up the server to run locally, Enter the following commands In your terminal:
```$ git clone https://github.com/Codestronomer/GPT-3-Calculator-API/
   $ cd gtp-3-calculator-API/
   $ npm install
   $ npm start
 ```

Set up your enviromental Variables
- PORT
- OPENAI_API_KEY - Generate one from OPENAI if you don't have on.

## Usage
- Test using CURL
```
$ curl https://murmuring-castle-28179.herokuapp.com/ -X POST -d '{"operation_type": "What is the addition of 5 and 8"}' -H "Content-Type: application/json"
```
- Test Using Postman

![image](https://user-images.githubusercontent.com/56360107/201122268-51a16643-7554-4b10-b973-2f451ad58864.png)


## Project Status
Project is: _complete_ / _Still_under_active_developer_.

## Acknowledgements
- This project was inspired by the recent improvements of Artificial Intelligence
- Many thanks to the OPENAI Team and HNG


## Contact
Created by John Rumide [@codestronomer](https://www.github.com/codestronomer/)
Email: Johnrumide6@gmail.com - feel free to contact me!


<!-- Optional -->
<!-- ## License -->
<!-- This project is open source and available under the [... License](). -->

<!-- You don't have to include all sections - just the one's relevant to your project -->


