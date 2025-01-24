// Function to calculate the completion year
function calculateCompletionYear() {
    // Prompt user to input their goal
    const goal = prompt("Enter your goal:");
    // if (!goal) {
    //   alert("Goal cannot be empty!");
    //   return;
    // }
  
    // Prompt user to input total hours required
    const totalHours = parseFloat(prompt("Enter total hours required to complete the goal:"));
    // if (isNaN(totalHours) || totalHours <= 0) {
    //   alert("Please enter a valid number for total hours.");
    //   return;
    // }
  
    // Prompt user to input daily hours they can dedicate
    const dailyHours = parseFloat(prompt("Enter daily hours you can dedicate to the goal:"));
    // if (isNaN(dailyHours) || dailyHours <= 0) {
    //   alert("Please enter a valid number for daily hours.");
    //   return;
    // }
  
    // Prompt user to enter their date of birth
    const dob = prompt("Enter your date of birth (YYYY-MM-DD):");
    const birthDate = new Date(dob);
    // if (isNaN(birthDate.getTime())) {
    //   alert("Please enter a valid date of birth in the format YYYY-MM-DD.");
    //   return;
    // }
  
    // Calculate total days required to complete the goal
    const totalDays = totalHours / dailyHours;
  
    // Get the current date
    const currentDate = new Date();
  
    // Calculate the completion date
    const completionDate = new Date(currentDate);
    completionDate.setDate(currentDate.getDate() + totalDays);
  
    // Calculate the age of the user at completion
    const completionAge = completionDate.getFullYear() - birthDate.getFullYear();
  
    // Display the result
    alert(`Goal: ${goal}
  Total Hours: ${totalHours}
  Daily Hours: ${dailyHours}
  Estimated Completion Date: ${completionDate.toDateString()}
  Your Age at Completion: ${completionAge} years`);
  }
  
  // Call the function
  calculateCompletionYear();
  