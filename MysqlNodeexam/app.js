const mysql = require("mysql");
const express = require("express");
const bodyparser = require("body-parser");

var app = express();

app.listen(3001,()  => console.log("listening on 3001"));

var mysqlconnection = mysql.createConnection({
    user: "root",
    password: "trueldba",
    host: "127.0.0.1",
    database: "msqlnodeexam",
});

// mysqlconnection.connect((err) => {
//     if(err){
//         console.log("err");

//     }
//     else{
//         console.log("connet");
//     }
// });

// app.get("/create",(req,res) => {
//     const createtablequery = `
// CREATE TABLE if not exists enrollments (
//     enrollment_id INT PRIMARY KEY AUTO_INCREMENT,
//     student_id INT,
//     course_id INT,
//     enrollment_date DATE,
//     FOREIGN KEY (student_id) REFERENCES students(student_id),
//     FOREIGN KEY (course_id) REFERENCES courses(course_id)
//     );
//     `;
//     mysqlconnection.query(createtablequery,(err,result) =>{
//         if(err){
//             console.err("error creating table",err);
//             res.status(500).send("failed to create table");
//         }else{
//             console.log("table checked/created successfully");
//             res.end("table created(if it didn't exist)");
//         }
//     });
// });
app.use(bodyparser.urlencoded({extended: true}));
// app.get("/studentform", (req, res) => {
//     res.send(`
//         <form action="/sendstudent" method="POST">
//             <label>First Name:</label><br>
//             <input type="text" name="first_name" required><br>

//             <label>Last Name:</label><br>
//             <input type="text" name="last_name" required><br>

//             <label>Email:</label><br>
//             <input type="email" name="email" required><br>

//             <label>Birth Date:</label><br>
//             <input type="date" name="birth_date" required><br><br>

//             <button type="submit">Submit</button>
//         </form>
//     `);
// });
// app.post("/sendstudent", (req, res) => {
//     const { first_name, last_name, email, birth_date } = req.body;

//     const insertQuery = `
//         INSERT INTO students (first_name, last_name, email, birth_date)
//         VALUES (?, ?, ?, ?)
//     `;

//     mysqlconnection.query(insertQuery, [first_name, last_name, email, birth_date], (err, result) => {
//         if (err) {
//             console.error("Insert failed:", err);
//             res.status(500).send("Failed to insert student");
//         } else {
//             res.send(`<h2>Student added successfully with ID: ${result.insertId}</h2>
//                       <a href="/studentform">Add another student</a>`);
//         }
//     });
// });
// app.get("/courseform", (req, res) => {
//   res.send(`
//     <form action="/sendcourse" method="POST">
//       <label>Course Name:</label><br>
//       <input type="text" name="course_name" required><br>

//       <label>Course Code:</label><br>
//       <input type="text" name="course_code" required><br>

//       <label>Teacher Name:</label><br>
//       <input type="text" name="teacher_name" required><br><br>

//       <button type="submit">Add Course</button>
//     </form>
//   `);
// });
// app.post("/sendcourse", (req, res) => {
//   const { course_name, course_code, teacher_name } = req.body;

//   const insertQuery = `
//     INSERT INTO courses (course_name, course_code, teacher_name)
//     VALUES (?, ?, ?)
//   `;

//   mysqlconnection.query(insertQuery, [course_name, course_code, teacher_name], (err, result) => {
//     if (err) {
//       console.error("Insert failed:", err);
//       res.status(500).send("Failed to add course");
//     } else {
//       res.send(`<h2>Course added successfully with ID: ${result.insertId}</h2>
//                 <a href="/courseform">Add another course</a>`);
//     }
//   });
// });
// app.get("/enrollform", (req, res) => {
//   const studentsQuery = "SELECT student_id, first_name, last_name FROM students";
//   const coursesQuery = "SELECT course_id, course_name FROM courses";

//   mysqlconnection.query(studentsQuery, (err, students) => {
//     if (err) return res.status(500).send("Error fetching students");

//     mysqlconnection.query(coursesQuery, (err, courses) => {
//       if (err) return res.status(500).send("Error fetching courses");

//       let studentOptions = students
//         .map(
//           (s) =>
//             `<option value="${s.student_id}">${s.first_name} ${s.last_name}</option>`
//         )
//         .join("");

//       let courseOptions = courses
//         .map((c) => `<option value="${c.course_id}">${c.course_name}</option>`)
//         .join("");

//       res.send(`
//         <form action="/enrollstudent" method="POST">
//           <label>Select Student:</label><br>
//           <select name="student_id" required>
//             ${studentOptions}
//           </select><br>

//           <label>Select Course:</label><br>
//           <select name="course_id" required>
//             ${courseOptions}
//           </select><br>

//           <label>Enrollment Date:</label><br>
//           <input type="date" name="enrollment_date" required><br><br>

//           <button type="submit">Enroll Student</button>
//         </form>
//       `);
//     });
//   });
// });
// app.post("/enrollstudent", (req, res) => {
//   const { student_id, course_id, enrollment_date } = req.body;

//   const insertQuery = `
//     INSERT INTO enrollments (student_id, course_id, enrollment_date)
//     VALUES (?, ?, ?)
//   `;

//   mysqlconnection.query(
//     insertQuery,
//     [student_id, course_id, enrollment_date],
//     (err, result) => {
//       if (err) {
//         console.error("Enrollment failed:", err);
//         res.status(500).send("Failed to enroll student");
//       } else {
//         res.send(`
//           <h2>Enrollment successful! Enrollment ID: ${result.insertId}</h2>
//           <a href="/enrollform">Enroll another student</a>
//         `);
//       }
//     }
//   );
// });



app.get("/student/:id/courses", (req, res) => {
  const studentId = req.params.id;
  const query = `
    SELECT s.first_name, s.last_name, c.course_name
    FROM students s
    JOIN enrollments e ON s.student_id = e.student_id
    JOIN courses c ON e.course_id = c.course_id
    WHERE s.student_id = ?
  `;

  mysqlconnection.query(query, [studentId], (err, results) => {
    if (err) {
      console.error("Database query failed:", err);
      return res.status(500).send("Internal Server Error");
    }

    if (results.length === 0) {
      return res.status(404).send("No courses found for this student.");
    }

    let courseList = results.map(row => `
      <li>${row.course_name}</li>
    `).join("");

    res.send(`
      <h1>${results[0].first_name} ${results[0].last_name}'s Courses</h1>
      <ul>${courseList}</ul>
    `);
  });
});


// app.post("/update-email/:id", (req, res) => {
//   const studentId = req.params.id;
//   const { email } = req.body;

//   const updateQuery = `
//     UPDATE students
//     SET email = ?
//     WHERE student_id = ?
//   `;

//   mysqlconnection.query(updateQuery, [email, studentId], (err, result) => {
//     if (err) {
//       console.error("Update failed:", err);
//       return res.status(500).send("Failed to update email");
//     }

//     if (result.affectedRows === 0) {
//       return res.status(404).send("Student not found");
//     }

//     res.send(`Email updated successfully for student ID ${studentId}`);
//   });
// });
// app.get("/update-email/:id", (req, res) => {
//   const studentId = req.params.id;
//   res.send(`
//     <form action="/update-email/${studentId}" method="POST">
//       <label for="email">New Email:</label>
//       <input type="email" id="email" name="email" required>
//       <button type="submit">Update Email</button>
//     </form>
//   `);
// });
