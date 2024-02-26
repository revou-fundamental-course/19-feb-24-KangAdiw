function submitMessage() {
  var name = document.getElementById("name").value;
  var birthdate = document.getElementById("birthdate").value;
  var gender = document.querySelector('input[name="gender"]:checked');
  var message = document.getElementById("userMessage").value;

  // Validasi: Nama harus diisi
  if (!name) {
    alert("Mohon isi Nama sebelum mengirim pesan.");
    return;
  }
  if (!birthdate) {
    alert("Mohon isi Tanggal Lahir sebelum mengirim pesan.");
    return;
  }
  if (!gender) {
    alert("Mohon pilih Jenis Kelamin sebelum mengirim pesan.");
    return;
  }

  // Get current date and time
  var currentTime = new Date();
  var day = currentTime.getDate();
  var month = getMonthName(currentTime.getMonth()); // Get month name
  var year = currentTime.getFullYear();
  var hours = currentTime.getHours();
  var minutes = currentTime.getMinutes();
  var seconds = currentTime.getSeconds();

  // Format date and time
  var formattedDateTime = `${capitalizeFirstLetter(month)} ${day} ${year} ${hours}:${minutes}:${seconds}`;

  // Tampilkan hasil
  var result = document.getElementById("messageResult");
  result.innerHTML = `
        <p><strong>Message Summary :</strong> ${formattedDateTime}</p>
        <br>
        <p><strong>Nama:</strong> ${name}</p>
        <p><strong>Tanggal Lahir:</strong> ${birthdate}</p>
        <p><strong>Jenis kelamin:</strong> ${gender ? gender.value : "Not specified"}</p>
        <p><strong>Pesan:</strong> ${message}</p>
    `;

  // Bersihkan formulir
  document.getElementById("messageForm").reset();
}

// Function to get month name
function getMonthName(month) {
  var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  return monthNames[month];
}

// Function to capitalize the first letter of a string
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
