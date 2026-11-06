# Path Learner – Smart Career & Learning Platform 🎓

**Explore career options, discover the skills you need, and find learning resources to get started.**

Path Learner is a frontend web application designed to help students and early-career learners explore different career options and make more informed decisions about their future.

The platform brings career information, specializations, required skills, an interactive career quiz, and useful learning resources together in one place.

It is built using HTML, CSS, and JavaScript, with mock data stored directly in JavaScript objects. The application runs entirely in the browser without requiring a backend or database.

## 🌐 Live Demo

**[Explore Path Learner](https://hithesh1120.github.io/Path-learner/)**

**GitHub Repository:** [Path Learner](https://github.com/hithesh1120/Path-learner)

## 💡 Why I Built This

Choosing a career path can be confusing, especially for students who are unsure about which field to pursue or what skills they need to develop.

Career information is often spread across different websites, and finding relevant learning resources can take time.

I built Path Learner to make this process a little easier by bringing different career domains, specializations, skill information, and learning platforms into a single website.

The idea is simple: help users explore their options, understand what different fields involve, and get a starting point for their learning journey.

## ✨ Features

### 🏠 1. Landing Page

The home section introduces the platform with the main message:

**"Discover Your Perfect Career Path"**

It includes two main call-to-action buttons:

- **Get Started:** Takes users towards exploring the platform.
- **Explore Fields:** Helps users browse available career domains.

### 🧭 2. Navigation

The website uses a single-page layout with navigation links for:

- Home
- Explore Fields
- Get Recommendation
- Resources
- About

Navigation uses smooth scrolling to move between sections without requiring separate pages.

### 🧪 3. Career Decision Section – "Are You Sure About Your Branch?"

Not every student starts with the same level of career clarity.

This section provides two possible directions:

- Users who already have an idea about their preferred field can explore career options directly.
- Users who are still unsure can take the career quiz to get suggestions based on their answers.

### 📚 4. Explore Career Fields

Users can browse different career domains and explore their related specializations.

Career categories include:

- Technology
- Medical
- Business
- Arts
- Civil
- Gaming
- Government
- Other career domains

Each category contains relevant sub-fields or specializations, along with short descriptions to help users understand the available options.

**Category filtering:** Users can switch between categories using tabs or filters. The website dynamically displays the matching career fields without reloading the page.

### ❓ 5. Interactive Career Recommendation Quiz

The career quiz helps users explore possible career directions based on their interests and preferences.

It uses a step-by-step question flow with:

- Previous and Next navigation.
- Questions about interests and strengths.
- Questions about comfort with mathematics.
- Answer collection throughout the quiz.
- A submission option to generate recommendations.

After submitting their answers, users are shown a **Personalized Recommendations** section with suggested career fields or specializations.

**How the recommendation logic works:**

The quiz uses JavaScript to collect answers, calculate simple scores, and map the results to relevant career fields or specializations.

The recommendations are generated using predefined data and scoring logic rather than an AI model or external API.

### 🎓 6. Learning Resources Hub

Exploring a career is only the first step. Users also need somewhere to start learning.

Path Learner includes a collection of learning platforms and educational resources, such as:

- Coursera
- Udemy
- freeCodeCamp
- InterviewBit

Each resource includes a short description and an external link to help users find relevant courses, tutorials, and learning materials.

### ℹ️ 7. About Section

The About section explains the purpose of Path Learner and provides additional information about the platform.

It also includes:

- A short project description.
- Quick navigation links.
- Sample contact information.

## ⚙️ How It Works

Path Learner is a client-side application. All its functionality runs directly in the user's browser.

There is no backend server, database, or external recommendation API.

### Data Management

The application uses JavaScript arrays and objects inside `script.js` to store information such as:

- Career fields and categories.
- Available specializations.
- Short descriptions and required skills.
- Quiz questions and answer options.
- Scoring and recommendation mappings.
- Learning platforms and their links.

### JavaScript Functionality

JavaScript handles the interactive parts of the website.

| User Action | What Happens |
|---|---|
| Clicks a navigation link | Scrolls to the selected section |
| Selects a career category | Filters and displays matching career fields |
| Opens a specialization | Displays its related information |
| Answers a quiz question | Stores the selected answer |
| Clicks Previous or Next | Moves between quiz questions |
| Submits the quiz | Calculates scores and displays suggested career paths |
| Selects a learning resource | Opens the corresponding external platform |

## 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| HTML5 | Website structure and semantic content |
| CSS3 | Styling, layouts, and responsive design |
| CSS Flexbox | Organizing and aligning page elements |
| Vanilla JavaScript (ES6) | Application logic and interactivity |
| JavaScript Arrays & Objects | Storing career, quiz, and resource data |
| Git | Version control |
| GitHub | Source code hosting |
| GitHub Pages | Website deployment and hosting |

**Note:** The project does not use frontend frameworks such as React or Vue. It was developed using plain HTML, CSS, and JavaScript.

## 📂 Project Structure

The main application logic is organized around the HTML, CSS, and JavaScript files.

```text
Path-learner/
│
├── index.html       # Main webpage and application structure
├── style.css        # Styling, layouts, and responsive design
├── script.js        # Career data, quiz logic, and interactions
│
└── assets/          # Images and other static resources (if included)
```

## 🚀 Getting Started

You can run Path Learner locally in two ways. No backend setup or database configuration is required.

### Prerequisites

- A modern web browser (Chrome, Firefox, Edge, etc.).
- Git (only needed for the clone option).

### Option 1: Download and Open in Browser

This is the easiest way to try the application.

1. Visit the [Path Learner GitHub Repository](https://github.com/hithesh1120/Path-learner).
2. Click the green **Code** button.
3. Select **Download ZIP**.
4. Extract the downloaded ZIP file.
5. Open the project folder.
6. Double-click `index.html`.

The website will open directly in your browser.

### Option 2: Clone the Repository

For developers who want to explore or modify the source code:

**Step 1 – Clone the repository**

```bash
git clone https://github.com/hithesh1120/Path-learner.git
```

**Step 2 – Navigate to the project folder**

```bash
cd Path-learner
```

**Step 3 – Open the project**

Open `index.html` in your preferred browser.

You can edit the HTML, CSS, and JavaScript files using VS Code or another code editor and refresh the browser to see your changes.

## 🌍 Deployment

Path Learner is deployed using **GitHub Pages**, which provides free hosting for static websites.

The deployment process involved:

1. Developing the website using HTML, CSS, and JavaScript.
2. Managing the source code with Git.
3. Pushing the project to GitHub.
4. Enabling GitHub Pages in the repository settings.
5. Publishing the website using its public GitHub Pages URL.

**Live Website:** https://hithesh1120.github.io/Path-learner/

## 📌 Project Scope and Limitations

Path Learner is currently a frontend-only project.

- Career information and learning resources are stored as predefined JavaScript data.
- The quiz uses basic scoring and predefined mappings to generate recommendations.
- There is no backend API or database.
- Quiz results are based on the answers and logic defined in the application, not professional career assessments or AI-generated predictions.

This approach keeps the project simple and easy to run without requiring server configuration.

## 🔮 Future Improvements

Some ideas that could make Path Learner more useful in the future:

- Add a backend to manage career information and learning resources dynamically.
- Introduce user accounts and save individual learning progress.
- Improve the recommendation system with more detailed career preference questions.
- Add personalized learning roadmaps for different specializations.
- Include course recommendations based on users' selected career paths.
- Expand the career database with more fields, skills, and opportunities.

## 👨‍💻 About the Developer

**Arava Hithesh Prem**

Computer Science graduate interested in software development, web technologies, and building practical applications.

- **Portfolio:** [Visit My Portfolio](https://hithesh1120.github.io/portfolio/)
- **GitHub:** [@hithesh1120](https://github.com/hithesh1120)
- **LinkedIn:** [Arava Hithesh Prem](https://www.linkedin.com/in/arava-hithesh-prem-08648b327/)
- **Email:** hitheshprem1120a@gmail.com

---

*Built with HTML, CSS, and JavaScript to help students explore possibilities and take the first step towards their career goals.* 🚀
