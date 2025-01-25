// Function to calculate the completion year
function calculateCompletionYear() {
    // Prompt user to input their goal
    const goal = document.getElementById("goal").value;
    if (!goal) {
      alert("Goal cannot be empty!");
      return;
    }
  
    // Prompt user to input total hours required
    const totalHours = parseFloat(document.getElementById("totalhours").value);
    if (isNaN(totalHours) || totalHours <= 0) {
      alert("Please enter a valid number for total hours.");
      return;
    }
  
    // Prompt user to input daily hours they can dedicate
    const dailyHours = parseFloat(document.getElementById("hoursperday").value);
    if (isNaN(dailyHours) || dailyHours <= 0) {
      alert("Please enter a valid number for daily hours.");
      return;
    }
  
    // Prompt user to enter their date of birth
    const dob = document.getElementById("dob").value;
    const birthDate = new Date(dob);
    if (isNaN(birthDate.getTime())) {
      alert("Please enter a valid date of birth in the format YYYY-MM-DD.");
      return;
    }
  
    // Calculate total days required to complete the goal
    const totalDays = totalHours / dailyHours;
  
    // Get the current date
    const currentDate = new Date();
  
    // Calculate the completion date
    const completionDate = new Date(currentDate);
    completionDate.setDate(currentDate.getDate() + totalDays);
  
    // Calculate the age of the user at completion
    const completionAge = completionDate.getFullYear() - birthDate.getFullYear();
   let result = document.getElementById("result");
    // Display the result
    result.innerHTML = `Goal: ${goal}<br>
    Total Hours: ${totalHours}<br>
    Daily Hours: ${dailyHours}<br>
    Date of Birth: ${dob}<br>
  Estimated Completion Date: ${completionDate.toDateString()}<br>
  Your Age at Completion: ${completionAge} years`;
  }
  
  // Call the function
 
  