/**
 * firstName(string) and lastName(string). These two attributes
 * should only be modifiable when a Teacher is first initialized
 * fullTimeEmployee(boolean) this attribute should always be defined
 * yearsOfExperience(number) this attribute is optional
 * location(string) this attribute should always be defined
 * Add the possibility to add any attribute to the Object like contract(boolean) 
 * without specifying the name of the attribute
 */

export interface Teacher {
    readonly firstName: string,
    readonly lastName: string,
    fullTimeEmployee: boolean,
    yearsOfExperience?: number,
    location: string,
    [index:string]: any,
  }
  
  export interface Director extends Teacher {
    numberOfReport: number,
  }
  
  export interface printTeacherFunction {
    (firstName: string, lastName: string): string;
  }
  
  export function printTeacher(firstName: string, lastName: string): string {
    return `${firstName[0]}. ${lastName}`;
  }
  
  export interface IStudentClassConstructor {
    new (firstName: string, lastName: string): IStudentClass;
  }
  
  export interface IStudentClass {
    workOnHomework(): string;
    displayName(): string;
  }
  
  export class StudentClass implements IStudentClass {
    private _firstName!: string;
    private _lastName!: string;
  
    constructor(firstName: string, lastName: string) {
      this._firstName = firstName;
      this._lastName = lastName;
    }
  
    workOnHomework() {
      return 'Currently working';
    }
  
    displayName() {
      return this._firstName;
    }
  }