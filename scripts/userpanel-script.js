// Simulated API endpoints (replace with your actual backend URLs)
const API_GET_URL = 'https://your-api.com/device/123';
const API_UPLOAD_URL = 'https://your-api.com/device/123/image';

const deviceImage = document.getElementById('device-image');
const deviceName = document.getElementById('device-name');
const deviceInfo = document.getElementById('device-info');
const fileInput = document.getElementById('file-input');
const uploadBtn = document.getElementById('upload-btn');

// Fetch device data from backend API
async function loadDeviceData() {
  try {
    const response = await fetch(API_GET_URL);
    const data = await response.json();

    // Assume the API returns: { imageUrl, name, info }
    deviceImage.src = data.imageUrl;
    deviceName.textContent = data.name;
    deviceInfo.textContent = data.info;
  } catch (err) {
    console.error('Failed to load device data:', err);
    alert('Could not load device info.');
  }
}

// Upload new image to backend
uploadBtn.addEventListener('click', async () => {
  const file = fileInput.files[0];
  if (!file) {
    alert('Please select an image first.');
    return;
  }

  const formData = new FormData();
  formData.append('deviceImage', file); // Backend should expect 'deviceImage'

  try {
    const response = await fetch(API_UPLOAD_URL, {
      method: 'POST',
      body: formData
    });

    if (!response.ok) throw new Error('Upload failed');

    const result = await response.json();
    alert('Image uploaded successfully!');
    deviceImage.src = result.newImageUrl; // Backend may return updated image URL
  } catch (err) {
    console.error('Upload error:', err);
    alert('Failed to upload image.');
  }
});

// Load data on page load
window.addEventListener('DOMContentLoaded', loadDeviceData);
