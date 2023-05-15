"use strict";

let courses = [
  {
    CourseId: "PROG100",
    Title: "Introduction to HTML/CSS/Git",
    Location: "Classroom 7",
    StartDate: "09/08/22",
    Fee: "100.00",
  },
  {
    CourseId: "PROG200",
    Title: "Introduction to JavaScript",
    Location: "Classroom 9",
    StartDate: "11/22/22",
    Fee: "350.00",
  },
  {
    CourseId: "PROG300",
    Title: "Introduction to Java",
    Location: "Classroom 1",
    StartDate: "01/09/23",
    Fee: "50.00",
  },
  {
    CourseId: "PROG400",
    Title: "Introduction to SQL and Databases",
    Location: "Classroom 7",
    StartDate: "03/16/23",
    Fee: "50.00",
  },
  {
    CourseId: "PROJ500",
    Title: "Introduction to Angular",
    Location: "Classroom 1",
    StartDate: "04/25/23",
    Fee: "50.00",
  },
];

function findCourseById(courseId) {
  for (const course of courses) {
    if (course.CourseId == courseId) {
      return course;
    }
  }
  return undefined;
}

// function hasCourseIdPROG200(course) {
//   if (course.CourseId == "PROG200") {
//     return true;
//   } else {
//     return false;
//   }
// }

function hasCourseIdPROG200(course) {
  return course.CourseId == "PROG200";
}

function findCourseById2(courseId) {
  return courses.find(hasCourseIdPROG200);
}

// function findCourseById3() {
//   return courses.find((course) => course.CourseId == "PROG200");
// }

// function findCourseById4() {
//   return courses.find((course) => course.Title == "Introduction to Angular");
// }

// When does the PROG200 course start?
function courseStartDate(courseId) {
  //   let course = findCourseById(courseId);
  let course = findCourseById2(courseId);
//   let course = findCourseById3(courseId);

  console.log(`${course.CourseId} starts on ${course.StartDate}.`);
}

courseStartDate("PROG200");
console.log();

// // What is the title of the PROJ500 course?
// function courseTitle(courseId) {
//   let course = findCourseById(courseId);
//   console.log(`${course.CourseId} is called ${course.Title}.`);
// }

// courseTitle("PROJ500");
// console.log();

// // What are the titles of the courses that cost $50 or less?
// function findCheapCourses() {
//   let cheapCourses = [];
//   for (const course of courses) {
//     const courseFee = parseFloat(course.Fee);
//     if (courseFee <= 50) {
//       cheapCourses.push(course);
//     }
//   }
//   return cheapCourses;
// }

// function cheapCourseList(courses) {
//   let cheapCourses = findCheapCourses();
//   console.log(cheapCourses);
// }

// cheapCourseList(courses);
