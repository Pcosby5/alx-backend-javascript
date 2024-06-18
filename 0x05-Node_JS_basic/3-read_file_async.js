const fs = require('fs').promises;

function countStudents(path) {
  return fs.readFile(path, 'utf-8')
    .then((data) => {
      const lines = data.split('\n').filter((line) => line.trim() !== '');

      if (lines.length === 0) {
        throw new Error('Cannot load the database');
      }

      const headers = lines.shift().split(',');

      const students = lines.map((line) => {
        const values = line.split(',');
        const student = {};
        headers.forEach((header, index) => {
          student[header] = values[index];
        });
        return student;
      });

      const totalStudents = students.length;
      console.log(`Number of students: ${totalStudents}`);

      const fields = {};
      students.forEach((student) => {
        const { field, firstname } = student;
        if (!fields[field]) {
          fields[field] = [];
        }
        fields[field].push(firstname);
      });

      for (const [field, names] of Object.entries(fields)) {
        console.log(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
      }
    })
    .catch(() => {
      throw new Error('Cannot load the database');
    });
}

module.exports = countStudents;
