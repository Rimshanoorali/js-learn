// Admin data
let adminData = null;

// Student data
let studentData = [];

// Sign-up form
const signupForm = document.getElementById("signup-form");
signupForm.addEventListener("submit", handleSignUp);

function handleSignUp(event) {
event.preventDefault(); // Prevent form from submitting

// Get form values
  const username = document.getElementById("signup-username").value;
  const password = document.getElementById("signup-password").value;

// Perform validation
  if (username.trim() === "" || password.trim() === "") {
    alert("Please enter both username and password.");
    return;
                                                       }

  // Store admin data
  adminData = { username, password };

  // Show login form
  toggleForm("login-form");
                              }

// Login form
const loginForm = document.getElementById("login-form");
loginForm.addEventListener("submit", handleLogin);

function handleLogin(event) {
  event.preventDefault(); // Prevent form from submitting

  // Get form values
  const username = document.getElementById("login-username").value;
  const useremail = document.getElementById("login-email").value;
  const password = document.getElementById("login-password").value;

  // Perform validation
  if (username !== adminData.username || password !== adminData.password) {
    alert("Invalid username, email or password.");
    return;
                                                                          }

  // Show student data form and table
  toggleForm("student-form");
  toggleTable("student-table");
                              }

// Student data form
const studentForm = document.getElementById("student-form");
studentForm.addEventListener("submit", handleStudentData);

function handleStudentData(event) {
  event.preventDefault(); // Prevent form from submitting

  // Get form values
  const fname = document.getElementById("student-fname").value;
  const lname = document.getElementById("student-lname").value;
  const age = document.getElementById("student-age").value;
  const gender = document.getElementById("student-gender").value;
  const id = document.getElementById("student-id").value;
  const email = document.getElementById("student-email").value;

  // Perform validation
  if (fname.trim() === "" || lname.trim() === "" || age.trim() === "" || gender.trim() === "" || id.trim() === "" | email.trim() === ""){
    alert("Please enter all student data.");
    return;
                                                                                                                                       }

  // Create student object
  const student = { fname, lname, age, gender, id, email};

  // Add student to the data array
  studentData.push(student);

  // Clear form fields
  document.getElementById("student-fname").value = "";
  document.getElementById("student-lname").value = "";
  document.getElementById("student-age").value = "";
  document.getElementById("student-gender").value = "";
  document.getElementById("student-id").value = "";
  document.getElementById("student-email").value = "";

  // Update the student table
  updateStudentTable();
                              }

function updateStudentTable() {
  const studentTableBody = document.getElementById("student-table-body");
  studentTableBody.innerHTML = "";

  // Add rows to the table
  for (let i = 0; i < studentData.length; i++) {
    const student = studentData[i];
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${student.fname}</td>
      <td>${student.lname}</td>
      <td>${student.age}</td>
      <td>${student.gender}</td>
      <td>${student.id}</td>
      <td>${student.email}</td>
      <td><button class="delete-button" onclick="deleteStudent(${i})"><i class="fa-solid fa-trash"></i></button></td>
      <td><button class="update-button" onclick="updateStudent(${i})"><i class="fa-solid fa-pen"></i></button></td>
    `;
    studentTableBody.appendChild(row);
                                               }
}

// Function to delete a student
function deleteStudent(index) {
  studentData.splice(index, 1);
  updateStudentTable();
}
// Function to update a record

function updateStudent(index){
  // Disable the first name field
  document.getElementById('student-fname').disabled = true;
     // Get the values from other fields
  const record = studentData[index];
  document.getElementById("student-fname").value = record.fname;
  document.getElementById("student-lname").value = record.lname;
  document.getElementById("student-age").value = record.age;
  document.getElementById("student-gender").value = record.gender;
  document.getElementById("student-id").value = record.id;
  document.getElementById("student-email").value = record.email;
  // Remove the record from the array

  studentData.splice(index, 1);
        // Update the table

  updateStudentTable();
                              }


// Function to toggle form visibility
function toggleForm(formId) {
  const forms = document.getElementsByTagName("form");
  for (let i = 0; i < forms.length; i++) {
    forms[i].style.display = "none";
                                         }

  const formToShow = document.getElementById(formId);
  formToShow.style.display = "block";
                              }

// Function to toggle table visibility
function toggleTable(tableId) {
  const tables = document.getElementsByTagName("table");
  for (let i = 0; i < tables.length; i++) {
    tables[i].style.display = "none";
                                          }

  const tableToShow = document.getElementById(tableId);
  tableToShow.style.display = "block";
                                }
