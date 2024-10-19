
# ResumeBuilder

ResumeBuilder is a MERN stack application designed to help users create, save, preview, and download professional resumes with customized formatting options.

## Project Structure

The project is organized into frontend and backend components, as described below:

### /frontend
This folder contains the client-side code (React).

- **/public**: Static files for the frontend.
- **/src**: Main source code for the frontend.
  - **/components**:
    - `Header.js`: Component for the header section.
    - `ResumeForm.js`: Main form to input resume details.
    - `ResumePreview.js`: Component for previewing the generated resume.
    - `Footer.js`: Footer section for the app.
  - `App.js`: Main entry point for the React application.
  - `index.js`: The root React DOM rendering.
  - `App.css`: Global styling for the app.
- **tailwind.config.js**: Configuration for Tailwind CSS.
- **postcss.config.js**: Configuration for PostCSS, used with Tailwind.
- **package.json**: Dependencies and scripts for the frontend.

### /backend
This folder contains the server-side code (Node.js and Express).

- **/controllers**: 
  - `resumeController.js`: Handles the logic for saving, retrieving, and updating resume data.
- **/models**:
  - `resumeModel.js`: Mongoose schema and model for resume data.
- **/routes**:
  - `resumeRoutes.js`: API endpoints for interacting with the resume data.
- **server.js**: Entry point for the backend server.
- **package.json**: Backend dependencies and scripts.

### /data
Configuration files related to the database.

- `mongodb.env`: Environment variables for MongoDB connection.

---

## Features

- **Create Resume**: A user-friendly form for inputting personal details, education, skills, and experience.
- **Preview Resume**: Dynamically preview the resume in real-time while editing.
- **Download Resume**: Option to download the formatted resume as a PDF.
- **Save Resume**: Store resume data in MongoDB for future editing and use.

## Technologies Used

- **Frontend**:
  - React.js
  - Tailwind CSS
- **Backend**:
  - Node.js
  - Express.js
  - MongoDB (Mongoose for schema management)

## Setup Instructions

1. Clone the repository:

   ```bash
   git clone https://github.com/Geetha-Bhumireddy/ResumeBuilder.git
   ```

2. Install dependencies for both frontend and backend:

   ```bash
   # Install frontend dependencies
   cd frontend
   npm install

   # Install backend dependencies
   cd ../backend
   npm install
   ```

3. Set up MongoDB:

   - Create a `.env` file in the `/data` folder with the following content:
     ```
     MONGODB_URI=your-mongodb-connection-string
     ```

4. Run the development server:

   ```bash
   # Start the backend server
   cd backend
   npm start

   # Start the frontend server
   cd ../frontend
   npm start
   ```

   The app will run on `http://localhost:3000`.

## Folder Structure

```bash
/resume-builder
    /frontend
        /public
        /src
            /components
                Header.js
                ResumeForm.js
                ResumePreview.js
                Footer.js
            App.js
            index.js
            App.css
        tailwind.config.js
        postcss.config.js
        package.json
    /backend
        /controllers
            resumeController.js
        /models
            resumeModel.js
        /routes
            resumeRoutes.js
        server.js
        package.json
    /data
        mongodb.env
