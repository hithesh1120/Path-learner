# Path Learner – Smart Career & Learning Platform

Path Learner is a frontend web application that helps students and early-career learners explore career paths, understand required skills, and find curated learning resources.  
It is built with HTML, CSS, and JavaScript using mock JSON data and deployed on GitHub Pages.

---

## 🔗 Live Demo

**GitHub Pages:**  
https://hithesh1120.github.io/Path-learner/

---

## 1. Setup Steps

You can run this project in two ways:

### 🔹 Option A – Open directly in browser (simplest)

1. Go to the GitHub repository:  
   https://github.com/hithesh1120/Path-learner
2. Click the green **“Code”** button → **“Download ZIP”**.
3. Extract the ZIP file on your computer.
4. Open the folder and double-click **`index.html`**.  
   The website will open in your browser.

### 🔹 Option B – Clone using Git (for development)

1. Make sure you have **Git** installed.
2. Run these commands in your terminal:

   ```bash
   git clone https://github.com/hithesh1120/Path-learner.git
   cd Path-learner

2. Tech Stack Used
🖥️ Frontend

HTML5 – page structure and semantic content

CSS3 – layout, responsiveness, and UI design

Flexbox & basic responsive behavior

Vanilla JavaScript (ES6) – interactivity and data handling

Navigation click handling

Dynamic rendering of career fields

Quiz flow and recommendations

📊 Data

Mock JSON-like JavaScript objects inside script.js for:

Career fields and categories (Technology, Medical, Business, Arts, Civil, Gaming, Government, etc.)

Specializations and required skills

Quiz questions and scoring logic

Global learning platforms and resources

🌐 Deployment

GitHub Pages – static hosting for the live demo

3. Features Overview

🏠 Landing Hero Section

Clear title: “Discover Your Perfect Career Path”

Call-to-action buttons: Get Started and Explore Fields

🧭 Navigation Bar

Links to: Home, Explore Fields, Get Recommendation, Resources, About

Smooth scrolling to sections (single-page experience)

🧪 “Are You Sure About Your Branch?” Section

Option for users who already know their field

Option for users who need help deciding (leads to quiz)

📚 Explore All Fields

Career domains grouped: Technology, Medical, Business, Arts, Civil, Gaming, Government, etc.

Tabs/filters to switch between categories

Shows sub-fields / specializations and short descriptions

❓ Personalized Career Quiz

Step-wise question flow (Previous / Next)

Collects user preferences (interests, strengths, comfort with math, etc.)

On submit, shows “Your Personalized Recommendations” section

🎓 General Learning Hub

Curated platforms like Coursera, Udemy, FreeCodeCamp, InterviewBit, etc.

Each link has a short description and external link

ℹ️ About Section

One-paragraph explanation of what Path Learner does

“Quick Links” and sample contact info

4. How the JavaScript Works (High Level)

A set of JavaScript arrays/objects stores:

Fields (Technology, Medical, Business, etc.)

Specializations and details

Quiz questions and mapping to recommendations

When the user:

Clicks a field filter → JS filters the mock data and renders matching cards in the Explore section.

Navigates the quiz → JS tracks the current question index, stores answers, and moves between Previous / Next.

Submits the quiz → JS computes a simple score/match and displays suggested fields or specializations in the “Your Personalized Recommendations” section.

There is no backend API – everything runs in the browser with mock data.
