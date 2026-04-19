# Aether Finance Dashboard

A state-of-the-art, premium finance dashboard web application. Built entirely with Vanilla HTML, CSS, and JavaScript, this application focuses on rich aesthetics, modern glassmorphism design, and dynamic interactivity.

## ✨ Features

- **Premium Aesthetics**: Features a sophisticated dark mode interface with glassmorphic cards, smooth gradients, and curated color palettes.
- **Dynamic Interactivity**: Includes hover effects, ripple animations, and dynamic SVG chart drawing without any external libraries.
- **Settings & Personalization**:
  - **Profile Management**: Update your display name and email. Avatar initials update automatically.
  - **Theme Customization**: Switch between different background themes (Midnight Blue, Obsidian Black, Slate Gray).
  - **Accent Colors**: Personalize the dashboard by choosing from a selection of vibrant accent colors.
- **No Build Steps**: 100% vanilla web technologies. No Node.js, Webpack, or Vite required!

## 🚀 How to Run

Since the application uses standard web technologies without any build requirements, running it is incredibly simple:

1. Clone or download this repository.
2. Navigate to the project directory.
3. Double-click the `index.html` file to open it in your default web browser.

*Alternatively, if you want to use a local server (e.g., to bypass certain strict CORS policies or use modern ES modules in the future):*
```bash
# If using Python 3
python -m http.server 8000
```
Then navigate to `http://localhost:8000` in your browser.

## 🛠️ Technologies Used

- **HTML5**: Semantic structure and SVG integrations.
- **CSS3**: Custom properties (variables), Flexbox/Grid layouts, keyframe animations, and backdrop filters for the glassmorphism effect.
- **JavaScript (ES6+)**: DOM manipulation, event handling, view switching, and dynamic CSS variable updates.

## 📁 Project Structure

- `index.html`: The main entry point containing the structure of the dashboard and settings views.
- `styles.css`: The styling engine responsible for themes, layouts, and animations.
- `app.js`: The interactive logic handling navigation, form submissions, and theme changes.
- `logo.png`: The geometric, AI-generated logo for the application.

## 🤝 Next Steps for Development

- Integrate a backend REST API or GraphQL server to fetch real user data.
- Connect to financial data providers (like Plaid or Stripe) to display live transaction data.
- Expand the "Wallets" and "Transactions" tabs into fully functional views.
