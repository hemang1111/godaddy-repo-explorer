# 🌐 GoDaddy Repo Explorer

A responsive web app built with **React**, **Vite**, **Redux Toolkit**, and **Tailwind CSS** to explore GoDaddy's public GitHub repositories.  
It fetches data from the [GitHub API](https://api.github.com/orgs/godaddy/repos) and displays repository information in a clean, modern UI.

---

## 🚀 Features
- 🔍 **Fetch & Display** all GoDaddy repositories
- 📄 **Detailed View** with description, languages, forks, issues & watchers
- 💫 **Responsive Design** with Tailwind CSS -- fully responsive for any device from mobile to 4k screen
- ⚙️ **Redux Toolkit** for state management
- 🧪 Basic unit tests for core components

NOTE :- Open this App in Light mode for better Experience , not managed 100% in dark mode. 
---

## 🧰 Tech Stack
- **React 19 (Vite)**
- **Tailwind CSS** for desinging 
- **Redux Toolkit** for managing data flow in app
- **RSuite UI** for modals & drawer
- **JEST** for writing unit testcases
- **GitHub REST API**

---
## 🧠 Test Cases Added
The test suite currently includes unit and behavior tests for RepoCard and related components:

✅ Drawer opens correctly when a repository card is clicked

✅ Drawer content matches the selected repository data

✅ Drawer closes when the close button is clicked (.rs-drawer-header-close)

✅ Search Input (Negative Case): filters out results for invalid search queries

✅ Search Input (Positive Case): correctly filters repositories by matching names

✅ Refresh Button: triggers re-fetch of repositories and updates the list

🧪 All components use accessible data-testid attributes for reliable querying during tests.

## 📦 Installation & Setup

```bash
# Clone the repo
git clone https://github.com/yourusername/godaddy-repo-explorer.git

# Install dependencies
npm install -f

# Run locally
npm run dev


🧪 Testing Setup
🧩 Libraries Used

Jest → Testing framework

React Testing Library → Component testing utilities

@testing-library/jest-dom → Custom DOM matchers

⚙️ Setup & Run Tests
# Run all tests
npm test

# Or run in watch mode
npm test -- --watch
