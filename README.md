# URL Shortener

A simple URL shortener service built with Node.js, Express, and MongoDB.


## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/url_shortener.git
   cd url_shortener
2. Install Dependencies
   ```sh
   npm install
3. Create a .env file in the bakcend directory and add your MongoDB connection string:
   ```sh
   DATABASE_URL=mongodb+srv://your_username:your_password@cluster0.4ihw2.mongodb.net/Cluster?retryWrites=true&w=majority
4. Start the development server:
   ```sh
   cd backend
   npm start

   //and in another terminal
   cd frontend
   npm start


## Usage
1. Open your browser and navigate to http://localhost:3000.
2. Use the input field to enter a URL you want to shorten.
3. Click the "Shorten" button to generate a shortened URL.



## Environmental Variables
Create a .env file in the backend directory with the following content:
   ```sh
   DATABASE_URL=mongodb+srv://your_username:your_password@cluster0.4ihw2.mongodb.net/Cluster?retryWrites=true&w=majority
 ```
Replace your_username, your_password, and Cluster with your actual MongoDB Atlas credentials and database name.
