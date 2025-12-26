# QR Code Generator

A command-line application that generates QR codes from URLs using Node.js. The application displays the QR code in the terminal and saves it as a PNG image file.

## 🎯 About The Project

This project is a simple yet powerful QR code generator that allows users to quickly create QR codes from any URL through an interactive command-line interface. It demonstrates the use of npm packages and file system operations in Node.js.

## 🛠️ Technologies Used

- **Node.js** - JavaScript runtime environment
- **Inquirer.js** - Interactive command-line prompts
- **QRCode** - QR code generation library
- **File System (fs)** - Node.js module for file operations

## ✨ Features

- **Interactive CLI**: User-friendly command-line prompts using Inquirer
- **Dual Output**: 
  - Displays QR code directly in the terminal
  - Saves QR code as a PNG image file
- **Customizable Colors**: Custom dark and light colors for QR code generation
- **Error Handling**: Proper error management for file operations
- **Fast Generation**: Quick QR code creation from any URL

## 📂 Project Structure

```
QR-GENERATOR/
├── index.js           # Main application file
├── package.json       # Project dependencies
├── qrcode.png        # Generated QR code (created after running)
└── node_modules/     # Dependencies folder
```

## 🚀 How to Run

### Prerequisites
- Node.js installed on your system
- npm (Node Package Manager)

### Installation Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/kavya045586-hash/QR-GENERATOR.git
   ```

2. Navigate to the project directory:
   ```bash
   cd QR-GENERATOR
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Run the application:
   ```bash
   node index.js
   ```

5. Follow the prompts:
   - Enter the URL you want to convert to a QR code
   - The QR code will be displayed in the terminal
   - A `qrcode.png` file will be saved in the project directory

## 💡 Usage Example

```bash
$ node index.js
? What is your URL? https://github.com/kavya045586-hash

# QR code displays in terminal
# Output: QR code saved as qrcode.png
```

## 📦 Dependencies

```json
{
  "inquirer": "^9.x.x",
  "qrcode": "^1.x.x"
}
```

## 🎓 Learning Outcomes

Through this project, I learned:
- Working with npm packages and package management
- Using Inquirer.js for creating interactive CLI applications
- Implementing the QRCode library for QR code generation
- File system operations in Node.js
- Error handling in asynchronous JavaScript
- ES6 modules (import/export syntax)

## 🎨 Customization

You can customize the QR code appearance by modifying the color options in the code:

```javascript
QRCode.toFile('qrcode.png', url, {
  color: {
    dark: '#000000',  // Change QR code color
    light: '#ffffff'  // Change background color
  }
})
```

## 🔮 Future Improvements

- [ ] Add option to customize output file name
- [ ] Support multiple QR code formats (SVG, PDF)
- [ ] Add QR code size customization
- [ ] Implement batch URL processing
- [ ] Add option to include logo/image in QR code center
- [ ] Create a web interface version
- [ ] Add QR code scanning/reading functionality
- [ ] Store generated QR codes history

## 🐛 Error Handling

The application includes error handling for:
- TTY (terminal) rendering issues
- File write operations
- QR code generation errors
- Invalid URL inputs

## 📧 Contact

- **Email**: kavya045586@gmail.com
- **GitHub**: [@kavya045586-hash](https://github.com/kavya045586-hash)



---

⭐ If you found this project useful, feel free to star the repository!
