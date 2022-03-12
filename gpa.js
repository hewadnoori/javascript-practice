// function calculate_gpa
// pass in student_grades
// set grade_total to 0
// for each grade in student_grades
// if grade is not a 1, 2, 3, or 4
// print "invalid grade" and grade
// exit function with "can't complete calculation" message
// else add grade to grade_total
// endif
// endfor
// set gpa to grade_total / number of grades
// return gpa
// endfunction

// set reggie_grades to 4, 4, 3, 4
// print the results of calling calculate_gpa with reggie_grades

// set dave_grades to 1, 2, 3, 2
// print the results of calling calculate_gpa with dave_grades
function calculate_gpa(student_grades) {
    let grade_total = 0;
    let gpa = 0;
    for (let i = 0; i < student_grades.length; i++) {
        //if (student_grades[i] !== 1 || student_grades[i] !== 2 || student_grades[i] !== 3 || student_grades[i] !== 4) {
        if (student_grades[i] < 1 || student_grades[i] > 4) {
            document.querySelector('main').innerHTML =
                `invalid grade
        ${student_grades[i]}`;

            console.error('Can\'t complete calculation');
            break
        }
        else {
            grade_total += student_grades[i];
        }

    }
    return gpa = grade_total / student_grades.length;
}
let reggie_grades = [4, 4, 3, 4];

let dave_grades = [1, 2, 3, 2];

let blake_grades = [1, 0, 12, 32];

console.log(calculate_gpa(reggie_grades));
console.log(calculate_gpa(dave_grades));
console.log(calculate_gpa(blake_grades));