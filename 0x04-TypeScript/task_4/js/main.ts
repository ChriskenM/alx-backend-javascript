/**
 * create and export a constant cpp for Cpp Subjects
 * create and export a constant java for Java Subjects
 * create and export a constant react for React Subjects
 * create and export one Teacher object cTeacher with experienceTeachingC = 10
 * for Cpp subject, log to the console C++, set cTeacher as the teacher,
 * call the two methods getRequirements and getAvailableTeacher and print the strings they return
 * for Java subject, log to the console Java, set cTeacher as the teacher,
 * call the two methods getRequirements and getAvailableTeacher, and print the strings they return
 * for React subject, log to the console React, set cTeacher as the teacher,
 * call the two methods getRequirements and getAvailableTeacher, and print the strings they return
 */

export const cpp: Subjects.Cpp = new Subjects.Cpp();
export const java: Subjects.Java = new Subjects.Java();
export const react: Subjects.React = new Subjects.React();
export const cTeacher: Subjects.Teacher = {
  firstName: 'Dennis',
  lastName: 'Ritchie',
  experienceTeachingC: 10,
};

console.log('C++');
cpp.setTeacher = cTeacher;
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

console.log('Java');
java.setTeacher = cTeacher;
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());

console.log('React');
react.setTeacher = cTeacher;
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());