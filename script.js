document.addEventListener("DOMContentLoaded", () => {
    const qrInput = document.getElementById("qr-input");
    const generateBtn = document.getElementById("generate-btn");
    const qrCanvas = document.getElementById("qr-canvas");
    const downloadBtn = document.getElementById("downloadBtn");
    const qr = new QRious({
      element: qrCanvas,
      size: 200, 
      value: ""
    });
    generateBtn.addEventListener("click", () => {
      const text = qrInput.value.trim();
      if (text) {
        qr.value = text;
        downloadBtn.style.display = "block";
      } else {
        alert("Please enter text or a URL to generate the QR code.");
      }
    });
    downloadBtn.addEventListener("click", () => {
    const link = document.createElement("a");
    link.download = "qrcode.png";
    link.href = qrCanvas.toDataURL();
    link.click();
    });
  });
