🎰 Slots
A simple and addictive browser-based slot machine game. Test your luck and see if you can hit the jackpot!

🚀 Quick Start

Option 1: Simple (No NPM needed)
Clone the repository
    - git clone https://github.com/alekcmirniy/slots.git
Navigate to the project directory
    - cd slots
Open index.html in your browser

Double-click the file, or

Use any local server:
# Python 3
    - python -m http.server 8000

# Python 2
    - python -m SimpleHTTPServer 8000

# Node.js (if you have http-server installed)
    - npx http-server


Option 2: With Live Server (VSCode users)
If you use Visual Studio Code with the Live Server extension:

Clone the repo

Right-click on index.html → "Open with Live Server"

Option 3: With NPM

# Clone and setup
    - git clone https://github.com/alekcmirniy/slots.git
    - cd slots

# Install dependencies (if any)
    - npm install

# Run development server (if configured)
    - npm start

🎮 How to Play
Press SPIN to start the slot machine

Match 3 symbols to win!

🛠️ Technologies Used
Pure JavaScript (ES6+)

HTML5

CSS3

Web Animations API

Structure:
SLOTS_FINISHED/
├── src/
│   ├── index.html          # Main HTML file
│   ├── index.js            # Main game logic JavaScript
│   ├── styles.scss         # Initial styles SASS
│   ├── styles.css          # Compiled CSS
├── assets/
│   ├── favicon.png         # Site icon
│   ├── zvuk-kontsa-vrascheniya.mp3  # Sound of ending the slots rotation
│   ├── zvuk-vrascheniya.mp3         # Sound of starting the slots rotation
├── .gitignore             # Git ignore file
├── LICENSE                # License
├── package.json           # NPM config
└── README.md              # This file

🤝 Contributing
Feel free to fork this project and submit pull requests! For major changes, please open an issue first to discuss what you'd like to change.у