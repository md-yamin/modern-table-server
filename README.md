**Project Overview:**
The Modern Table is a sophisticated restaurant reservation and management website. It features a seamless user experience for customers and restaurant managers. This project focuses on optimizing the booking process, enhancing restaurant management, and improving customer satisfaction. 

**Key Features:**

- Dynamic reservation management for users.
-  Reservation booking system integration for online reservations.
- Responsive design with tailored layouts for different access levels.


**Client-Side Website Live Link:**
[The Modern Table Live](https://modern-table-b0855.web.app)

**Client-Side GitHub Repository:**
[GitHub Client](https://github.com/md-yamin/modern-table)

**Server-Side GitHub Repository:**
[GitHub Server](https://github.com/md-yamin/modern-table-server)

---

### Instructions to Clone and Run The Modern Table:

1. **Clone the Client-Side Repository:**
   - `git clone https://github.com/md-yamin/modern-table.git`
   - `cd /your-project-name`

2. **Install Packages:**
   - `npm install`

3. **Add Firebase Environment Variables:**
   Ensure you add your Firebase environment variables to a `.env` file in the root directory.

4. **Update Request URLs:**
   Replace all request URLs from `https://modern-table-server.vercel.app` to your server URL. If running locally, use `http://localhost:5000`.

5. **Clone the Server-Side Repository:**
   - `git clone https://github.com/md-yamin/modern-table-server.git`
   - `cd /your-project-name`

6. **Configure CORS:**
   Add the local URL of the client to the CORS origin if running locally, or use `*` to allow access from any origin.

7. **Set Up Environment Variables:**
   Create a `.env` file with the following variables:
   - `DB_USER=your-mongodb-uri-username`
   - `DB_PASS=your-mongodb-uri-password`

8. **Run the Server and Client:**

   a. Start the server:
   - Open a terminal
   - Change directory to your project folder `cd /your-project-name`
   - `nodemon index.js`

   b. Start the client:
   - Open a terminal
   - Change directory to your project folder `cd /your-project-name`
   - `npm run dev`

Now you're all set to explore "The Modern Table"!
