// Basic Sort
// sort the array numerically (the sorted array should equal [1, 2, 5, 9, 10])
var numArray1 = [1, 10, 2, 5, 9];

numArray1.sort( (a,b) => {
  return a - b;
});

// console.log(numArray1);


// Advance Sort
/*

Write a sorting function (sometimes called a custom comparator),
that sorts the students array first by the name ascending alphabetically,
and in cases where the names are equal priotize the older.

*/

var students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 22 },
  { id: 4, name: "alex",     age: 30 }
];

function advanceSort(arrayToSort) {
  students.sort(function(a, b) {
    var nameA = a.name.toUpperCase(); // ignore upper and lowercase
    var nameB = b.name.toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }

    if (nameA == nameB) {
      // console.log('equal', a,b);
      // names must be equal
      return 1;
    }

  });
}

advanceSort(students);
console.log(students);

