////map///////////////////////////////////////////







// table.js /////////////////////////////////////////////////////////////////////////////////////////////////





// Get a reference to the "Register" button
const registerButton = document.querySelector("#registerButton");

// Add a click event listener to the "Register" button
registerButton.addEventListener("click", function (event) {
  event.preventDefault(); // Prevent the form from submitting (adjust as needed)

  // Get the input values from the registration form
  const organizationName = document.querySelector("#organization-name").value;
  const email = document.querySelector("#email").value;
  const ndrfId = document.querySelector("#ndrf-id").value;
  const location = document.querySelector("#location").value;
  const contact = document.querySelector("#contact").value;
  const domain = document.querySelector("#domain").value;

  // Create a new table row
  const newRow = document.createElement("tr");

  // Populate the new row with data
  newRow.innerHTML = `
    <td class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">${organizationName}</td>
    <td class="px-6 py-4">${email}</td>
    <td class="px-6 py-4">${contact}</td>
    <td class="px-6 py-4">${location}</td>
    <td class="px-6 py-4 flex flex-wrap">
      <span class="bg-gray-400 text-gray-700 p-2 px-4 rounded-full mr-1">${domain}</span>
    </td>
    <td class="px-6 py-4">
      <button class="text-sky-400 send-alert-button" id="alertButton1">Send alert</button>
    </td>
  `;

  // Get a reference to the table body
  const tableBody = document.querySelector("tbody");

  // Append the new row to the table
  tableBody.appendChild(newRow);

  // Clear the input fields after registration (adjust as needed)
  document.querySelector("#organization-name").value = "";
  document.querySelector("#email").value = "";
  document.querySelector("#ndrf-id").value = "";
  document.querySelector("#location").value = "";
  document.querySelector("#contact").value = "";
  document.querySelector("#domain").value = "";
});




////////////////////alert/////////////////////////////


const sendAlertButton = document.querySelectorAll(".send-alert-button");
const alertModal = document.getElementById("alertModal");
const closeAlertButton = document.getElementById("closeAlertButton");

// Function to show the alert modal
function showAlertModal() {
    alertModal.classList.remove("hidden");
}

// Function to hide the alert modal
function hideAlertModal() {
    alertModal.classList.add("hidden");
}

// Add click event listeners to all "Send alert" buttons
sendAlertButton.forEach((button) => {
    button.addEventListener("click", () => {
        showAlertModal();
    });
});

// Add click event listener to the "Close" button in the modal
closeAlertButton.addEventListener("click", () => {
    hideAlertModal();
});


// Add click event listener to the "Close" button in the modal
closeAlertButton.addEventListener("click", () => {
    hideAlertModal();
});

// Your existing code for the "Register" button and other functionality
// ...



const locationTd = document.querySelector("#locate");

// Get a reference to the map element
const mapDiv = document.querySelector("#map");

// Add a click event listener to the location td
locationTd.addEventListener("click", () => {
    // Scroll the map element into view when the location td is clicked
    mapDiv.scrollIntoView({ behavior: "smooth" });
});
