document.addEventListener("DOMContentLoaded", () => {
    const qrInput = document.getElementById("qr-input");
    const generateBtn = document.getElementById("generate-btn");
    const qrCanvas = document.getElementById("qr-canvas");
  
    
    const qr = new QRious({
      element: qrCanvas,
      size: 200, 
      value: ""
    });
  
   
    generateBtn.addEventListener("click", () => {
      const text = qrInput.value.trim();
      if (text) {
        qr.value = text;
      } else {
        alert("Please enter text or a URL to generate the QR code.");
      }
    });
  });