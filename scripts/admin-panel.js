
// Simulated backend data (replace this with fetch from your database/API)
const backendData = [
  { id: 1, name: "John Doe", email: "john@example.com" },
  { id: 2, name: "Jane Smith", email: "jane@example.com" },
  { id: 3, name: "Ali Musa", email: "ali@example.com" }
];

function populateTable(data) {
  const tableBody = document.getElementById("dataTable").querySelector("tbody");
  tableBody.innerHTML = ""; // Clear existing rows

  data.forEach(row => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${row.id}</td>
      <td>${row.name}</td>
      <td>${row.email}</td>
    `;
    tableBody.appendChild(tr);
  });
}

// Call this function when page loads
document.addEventListener("DOMContentLoaded", () => {
  populateTable(backendData);
});



// this is propfile photo update code



    function updateProfileImage(event) {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
          document.getElementById('profileImage').src = e.target.result;
        };
        reader.readAsDataURL(file);
      }
    }
