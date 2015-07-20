
do {
  var numStudents = prompt("What is the total number of Students learning JavaScript?");
} while (numStudents < 0 || !numStudents.match(/\d/g));

var i = 0;
var students = [];

while (i < numStudents) {
  var studentInfo = {};
  i++;
  var error = false;

  do {
    if (error) {
      alert("Please enter a valid name");
    }
    studentInfo.name = prompt("Please enter the student's name.");
    error = true;
  } while (!studentInfo.name.match(/[a-zA-Z ]/) || studentInfo.name === null);

  error = false;
  do {
    if (error) {
      alert("Please enter a valid phone number.");
    }
    studentInfo.phone = prompt("Please enter the student's phone number in this format 123-456-7890.");
    error = true;
  } while (!studentInfo.phone.match(/^\d{3}-\d{3}-\d{4}$/));

  error = false;
  do {
    if (error) {
      alert("Please enter a valid city.");
    }
    studentInfo.city = prompt("Please enter the student's city.");
    error = true;
  } while (!studentInfo.city.match(/[a-zA-Z ]/) || studentInfo.city === null);

  students.push(studentInfo);
}

document.write("Number of students: " + numStudents + "<br/>Students: " + JSON.stringify(students));


do {
  var numMentors = prompt("What is the total number of Mentors?");
} while (numMentors < 0 || !numMentors.match(/\d/g));

var i = 0;
var mentors = [];

while (i < numMentors) {
  var mentorInfo = {};
  i++;
  var error = false;

  do {
    if (error) {
      alert("Please enter a valid name");
    }
    mentorInfo.name = prompt("Please enter the mentors's name.");
    error = true;
  } while (!mentorInfo.name.match(/[a-zA-Z ]/) || mentorInfo.name === null);

  error = false;
  do {
    if (error) {
      alert("Please enter a valid phone number.");
    }
    mentorInfo.phone = prompt("Please enter the mentor's phone number in this format 123-456-7890.");
    error = true;
  } while (!mentorInfo.phone.match(/^\d{3}-\d{3}-\d{4}$/));

  error = false;
  do {
    if (error) {
      alert("Please enter a valid city.");
    }
    mentorInfo.city = prompt("Please enter the student's city.");
    error = true;
  } while (!mentorInfo.city.match(/[a-zA-Z ]/) || mentorInfo.city === null);

  mentors.push(mentorInfo);
}

document.write("<br/>Number of mentors: " + numMentors + "<br/>Mentors: " + JSON.stringify(mentors));
