// full_server/utils.js

const fs = require('fs');

/**
 * Reads the database asynchronously.
 * @param {string} filePath The path to the CSV data file.
 * @returns {Promise} A promise that resolves to an object of arrays of student first names per fields.
 */
const readDatabase = (filePath) => {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf-8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      } else {
        const studentGroups = {};
        const lines = data.trim().split('\n');
        const fieldNames = lines[0].split(',').slice(0, -1);

        for (let i = 1; i < lines.length; i++) {
          const [firstName, field] = lines[i].trim().split(',').slice(0, -1);
          if (!studentGroups[field]) {
            studentGroups[field] = [];
          }
          studentGroups[field].push(firstName);
        }
        resolve(studentGroups);
      }
    });
  });
};

module.exports = { readDatabase };

