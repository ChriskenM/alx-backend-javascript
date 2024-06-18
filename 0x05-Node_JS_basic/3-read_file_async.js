const fs = require('fs').promises;

async function countStudents(path) {
  try {
    // Step 1: Read the file asynchronously
    const data = await fs.readFile(path, 'utf8');

    // Step 2: Split the data into lines and filter out any empty lines
    const lines = data.split('\n').filter(line => line.trim() !== '');
    
    // Step 3: Remove the header line
    const headers = lines.shift().split(',');

    // Step 4: Initialize a dictionary to hold the field information
    const students = {};
    let totalStudents = 0;

    // Step 5: Process each line
    for (const line of lines) {
      const [firstname, lastname, age, field] = line.split(',');

      if (field) {
        if (!students[field]) {
          students[field] = [];
        }
        students[field].push(firstname);
        totalStudents++;
      }
    }

    // Step 6: Log the total number of students
    console.log(`Number of students: ${totalStudents}`);

    // Step 7: Log the number of students and their names in each field
    for (const field in students) {
      if (students.hasOwnProperty(field)) {
        console.log(`Number of students in ${field}: ${students[field].length}. List: ${students[field].join(', ')}`);
      }
    }
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = { countStudents };

