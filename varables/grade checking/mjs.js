function checkGrade() {
  // Get the input value
  var percentage = document.getElementById('gradeInput').value;

  // Check the grade based on percentage
  var grade = calculateGrade(percentage);

  // Display the result
  displayResult(grade);
}

function calculateGrade(percentage) {
  if (percentage >= 90) {
    return 'A';
  } else if (percentage >= 80) {
    return 'B';
  } else if (percentage >= 70) {
    return 'C';
  } else if (percentage >= 60) {
    return 'D';
  } else {
    return 'F';
  }
}

function displayResult(grade) {
  var resultElement = document.getElementById('result');
  resultElement.textContent = 'Your grade is: ' + grade;
}