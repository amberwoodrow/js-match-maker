function getInfo(infoType) {
  do {
    var numPeople = prompt("What is the total number of "+ infoType +"s learning JavaScript?");
  } while (numPeople < 0 || !numPeople.match(/\d/g));

  var i = 0;
  var people = [];

  while (i < numPeople) {
    var personInfo = {};
    i++;
    var error = false;

    do {
      if (error) {
        alert("Please enter a valid name");
      }
      personInfo.name = prompt("Please enter the " + infoType + "'s name.");
      error = true;
    } while (!personInfo.name.match(/[a-zA-Z ]/) || personInfo.name === null);

    error = false;
    do {
      if (error) {
        alert("Please enter a valid phone number.");
      }
      personInfo.phone = prompt("Please enter the " + infoType + "'s phone number in this format 123-456-7890.");
      error = true;
    } while (!personInfo.phone.match(/^\d{3}-\d{3}-\d{4}$/));

    error = false;
    do {
      if (error) {
        alert("Please enter a valid city.");
      }
      personInfo.city = prompt("Please enter the " + infoType + "'s city.");
      error = true;
    } while (!personInfo.city.match(/[a-zA-Z ]/) || personInfo.city === null);

    people.push(personInfo);
  }

  return "Number of " + infoType + "s: " + numPeople + "<br/>"+ infoType +": " + JSON.stringify(people);
}

students = getInfo("Student");
mentor = getInfo("Mentor");
document.write(students);
document.write(mentor);
