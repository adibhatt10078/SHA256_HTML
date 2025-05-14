
# `SHA256 Hasher (AngularJS + CryptoJS)`

This is a simple web-based SHA256 hashing tool built with **AngularJS**, **CryptoJS**, and **Bootstrap**. It allows users to input text and generate a SHA256 hash of the content.

---

# `Features`

- Input any text or string
- Generate secure SHA256 hash using `crypto-js`
- Fully responsive layout using Bootstrap 5
- Input any text and generate its SHA256 hash instantly
- Validation for empty input
- Reset button to clear input and output
- Modular structure with clean code separation

---

# `Folder Structure`
```bash
sha256-hasher/
├── index.html                # Main HTML page
├── styles.css                # Custom styling
├── app.js                    # AngularJS app logic
├── libs/
│   ├── angular.min.js        # AngularJS framework
│   └── bootstrap.min.css     # Bootstrap styling
│   └── crypto-js.min.js      # SHA256 hashing library
├── screenshot/
│   └── SHA256 Hasher Web.png # Screenshot of output 
└── README.md                 # Project documentation
```
---

# `How to Use`
 - Download or Clone the repository:
 - Open the app:
   - Just open `index.html` in your browser (no server required).
 - Start hashing:
   - Type your input in the field
   - Click the "Generate SHA256 Hash" button
   - The result appears below
---

# `Dependencies`

- [AngularJS 1.8.2](https://angularjs.org/)
- [Bootstrap 5](https://getbootstrap.com/)
- [CryptoJS](https://github.com/brix/crypto-js)
---

# Screenshots

![SHA256 Hasher Screenshot](SHA256_web/screenshot/SHA256%20Hasher%20Web.png)
---

# `Notes`

- SHA256 is a one-way cryptographic hash — it's irreversible.
- This app is for educational and basic use. For secure password handling, use salted hashes with algorithms like bcrypt or Argon2.
---
