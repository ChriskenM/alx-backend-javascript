// full_server/controllers/StudentsController.js

const { readDatabase } = require('../utils');

class StudentsController {
  static async getAllStudents(req, res) {
    try {
      const studentGroups = await readDatabase(process.argv[2]);
      const responseParts = ['This is the list of our students'];
      Object.keys(studentGroups)
        .sort((a, b) => a.localeCompare(b, 'en', { sensitivity: 'base' }))
        .forEach((field) => {
          responseParts.push(`Number of students in ${field}: ${studentGroups[field].length}. List: ${studentGroups[field].join(', ')}`);
        });
      res.status(200).send(responseParts.join('\n'));
    } catch (error) {
      res.status(500).send(error.message);
    }
  }

  static async getAllStudentsByMajor(req, res) {
    const { major } = req.params;
    if (major !== 'CS' && major !== 'SWE') {
      return res.status(500).send('Major parameter must be CS or SWE');
    }
    try {
      const studentGroups = await readDatabase(process.argv[2]);
      const students = studentGroups[major] || [];
      res.status(200).send(`List: ${students.join(', ')}`);
    } catch (error) {
      res.status(500).send(error.message);
    }
  }
}

module.exports = StudentsController;

