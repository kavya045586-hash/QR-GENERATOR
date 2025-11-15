
import inquirer from 'inquirer';
import QRCode from 'qrcode';
import fs from 'fs';

inquirer
  .prompt([
    { message: "What is your URL?", name: "url" }
  ])
  .then((answers) => {
    const url = answers.url;

    // Option 1: Print QR code to terminal
    QRCode.toString(url, { type: 'terminal' }, function (err, qr) {
      if (err) throw err;
      console.log(qr);
    });

    // Option 2: Save QR code as PNG
    QRCode.toFile('qrcode.png', url, {
      color: {
        dark: '#000000',  // QR code color
        light: '#ffffff'  // Background color
      }
    }, function (err) {
      if (err) throw err;
      console.log('QR code saved as qrcode.png');
    });
  })
  .catch((error) => {
    if (error.isTtyError) {
      console.log("Prompt couldn't be rendered in this environment");
    } else {
      console.log("Something else went wrong", error);
    }
  });