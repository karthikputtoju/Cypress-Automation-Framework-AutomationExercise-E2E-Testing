# Cypress Automation Framework – AutomationExercise E2E Testing

![Cypress](https://img.shields.io/badge/Cypress-E2E%20Testing-brightgreen?style=flat&logo=cypress)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow?style=flat&logo=javascript)
![License](https://img.shields.io/badge/License-MIT-blue.svg)

##  Overview
This project is a **Cypress-based End-to-End (E2E) Automation Framework** created to test the complete workflow of [AutomationExercise](https://automationexercise.com).  
It follows **Page Object Model (POM)** design principles for scalability and reusability, covering functional, UI, and regression testing.

---

##  Features
- **End-to-End Test Coverage** for:
  - User Registration
  - Login & Logout
  - Product Search
  - Add to Cart
  - Checkout Process
  - Contact Form
- **Page Object Model (POM)** for clean and maintainable code
- **Reusable Custom Commands** to reduce duplication
- **Cross-Browser Testing Support**
- **Screenshots & Video Recording** for failed tests
- **Test Reports** generation in HTML format

---

##  Tech Stack
- **Framework:** Cypress 13+
- **Language:** JavaScript (ES6)
- **Test Runner:** Cypress built-in runner
- **Assertion Library:** Chai & Cypress Assertions
- **Reports:** Mochawesome
- **Package Manager:** npm

---

##  Folder Structure
```plaintext
Cypress-Automation-Framework-AutomationExercise-E2E-Testing/
│
├── cypress/
│   ├── e2e/                # Test cases
│   │   ├── login.cy.js
│   │   ├── register.cy.js
│   │   ├── productSearch.cy.js
│   │   └── checkout.cy.js
│   │
│   ├── pages/              # Page Object Model classes
│   │   ├── LoginPage.js
│   │   ├── RegisterPage.js
│   │   ├── ProductPage.js
│   │   └── CheckoutPage.js
│   │
│   ├── fixtures/           # Test data
│   │   └── userData.json
│   │
│   ├── support/
│   │   ├── commands.js     # Custom commands
│   │   └── e2e.js          # Global hooks
│
├── reports/                # HTML and JSON reports
├── videos/                 # Recorded videos
├── screenshots/            # Failure screenshots
├── cypress.config.js       # Cypress configuration
├── package.json
└── README.md
