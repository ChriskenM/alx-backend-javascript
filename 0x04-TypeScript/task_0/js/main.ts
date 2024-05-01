
/**
 * Write an interface named Student accepts the
 * following elements:
 * - firstName(string),
 * - lastName(string),
 * - age(number),
 * - location(string)
 */

export interface Student {
    firstName: string,
    lastName: string,
    age: number,
    location: string,
  }
  
  
  const studentOne: Student = {
    firstName: 'Carter',
    lastName: 'John',
    age: 22,
    location: 'Mikinduri',
  };
  
  const studentTwo: Student = {
    firstName: 'thigo',
    lastName: 'Met',
    age: 23,
    location: 'Abuja',
  };
  
  const studentsList: Array<Student> = [
    studentOne,
    studentTwo,
  ];
  
  
  /**
   * - Using Vanilla Javascript, render a table and for each elements in the array,
   * append a new row to the table
   */
  
  export const renderTable = (studentsList: Array<Student>): void =>  {
    // create table tag
    const table = document.createElement('table');
    const headRow = document.createElement('tr');
    table.insertAdjacentElement('beforeend', headRow);
  
    // insert headers
    headRow.insertAdjacentHTML('beforeend', '<th>FirstName</th>');
    headRow.insertAdjacentHTML('beforeend', '<th>Location</th>');
  
    for (const student of studentsList) {
      const studentRow = document.createElement('tr')
      studentRow.insertAdjacentHTML('beforeend', `<td>${student.firstName}</td>`);
      studentRow.insertAdjacentHTML('beforeend', `<td>${student.location}</td>`);
      table.insertAdjacentElement('beforeend', studentRow);
    }
  
    document.body.insertAdjacentElement('beforeend', table);
  }
  
  renderTable(studentsList);