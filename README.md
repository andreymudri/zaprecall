# Zap Recall - Flashcards App

  <p align="center">
  <img src="https://cdn.discordapp.com/attachments/518237283103801344/1155706383531004035/image.png" alt="Zap Recall Preview">
  </p>

## Introduction
Flashcards are cards that contain a question/statement on the front and an answer on the back. They can be used to train your memory using the Active Recall and Spaced Repetition methodologies. The idea is to read the question or statement and try to remember the answer. When encountering the same flashcard again, depending on the effort required to answer it, you become aware of which contents are fresh in your memory and which ones are not. This way, you can practice the contents that are not fresh frequently.

## "Zap!" Moment
When we instantly remember a flashcard, we had a "Zap!" moment ⚡. It signifies a successful recall and reinforces the memory.

## Decks
Sets of flashcards are called decks. This app should have at least one deck by default, consisting of 8 flashcards.

## Technologies used:
- React
- Styled Components

# How to Install zaprecall

Follow these steps to install the **zaprecall** Node.js backend application on your system.

## Prerequisites

- **Node.js**: Ensure that you have Node.js installed on your system. You can download it from [nodejs.org](https://nodejs.org/).

## Installation Steps

1. **Clone the Repository**

   - Go to the [Zap recall GitHub repository]([https://github.com/your-repo-url](https://github.com/andreymudri/zaprecall)) and click on the "Clone" button to copy the repository URL.
   - Open your preferred Git client or use the Git command line and run the following command:
   
     ```
     git clone https://github.com/andreymudri/zaprecall
     ```
     

2. **Navigate to the Project Directory**

   - Using your terminal or command prompt, change your working directory to the zaprecall project folder:

     ```
     cd zaprecall
     ```

3. **Install Dependencies**

   - Install the required dependencies by running the following command:

     ```
     npm install
     ```

   This command will download and install all the necessary packages and libraries specified in the `package.json` file.

4. **Configuration**

   - Depending on your environment, you may need to configure database connections or other environment-specific settings. Check the project's configuration files, such as `.env.example` if there is one, and make any necessary changes.

5. **Backend Setup**

   - If the application uses a backend, you'll need to set it up. Refer to the project's documentation or configuration files to configure your backend connection.

6. **Start the Application**

   - Start the zaprecall server by running the following command:

     ```
     npm start
     ```

   This will start the server, and it should now be accessible at a specified endpoint (usually `localhost:3000` by default).
