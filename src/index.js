// @ts-check
/**
 * Student Name
 * @type {string}
 */
const studentName = 'A String'

/**
 * An Array of Grades
 * @type {Array<number>}
 */

const grades = [96, 81.4, 100]

/**
 * ToDo Object
 * @type {{id: number|boolean, text: string}}
 */
const todo = {
    id: false,
    text: "A String"
}

/**
 * Calculate Amount with Tax
 * @param {number} amount - total Amount pre-tax
 * @param {number} taxRate - tax %
 * @returns {string} - Total with a dollar sign
 */
const calculateTax = (amount, taxRate) => {
    return `$${amount + taxRate * amount}`
}

console.log(calculateTax(100, 0.1))

/**
 * A Student
 * @typedef {Object} Student
 * @property {number} id - Student ID
 * @property {string} name - Student Name
 * @property {string|number} [age] - Student ID [make it optional]
 * @property {boolean} active - Is Student Active?
 */

 /**
  * @type {Student}
  */

 const student = {
     id: 1,
     name: 'James',
     age: 37,
     active: true
 }

/**
 * Class to create a person object
 */

 class Person {
     /**
      * 
      * @param {Object} personInfo - Info About Person
      */
     constructor(personInfo) {
        /**
         * @property {string} name - Person's name
         */
        this.name = personInfo.name
        /**
         * @property {string|number} age Person's age
         */
        this.age = personInfo.age
     }

 }