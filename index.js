import { Temporal } from "@js-temporal/polyfill";
import { isStudent } from "./models/student.model.js";
import { parseStudent } from "./models/student.model.js";
/*const student: Student = {
id: "STU-001",
name: "Hana Tadesse",
enrollmentDate: Temporal.Now.instant(),
};
student.id = "STU-999";
console.log(student.gpa.toFixed(2));
console.log(student.gpa?.toFixed(2) ?? "Not yet graded");*/
/*function processStudent(data: any) {
console.log(`GPA: ${data.gpa.toFixed(2)}`); // Crashes if gpa is missing or not a number
}*/
function processStudent(raw) {
    if (isStudent(raw)) {
        const gpaDisplay = raw.gpa?.toFixed(2) ?? "Not yet graded";
        console.log(`Student ${raw.name} GPA: ${gpaDisplay}`);
    }
    else {
        console.error("Invalid student data received");
    }
}
processStudent({ id: "STU-001", name: "Hana", gpa: 3.7 });
// Prints: Student Hana GPA: 3.70
processStudent(42);
console.log(parseStudent({ id: "STU-001", name: "Hana" }));
// Prints a valid Student object
//parseStudent({ id: 42, name: "Test" });
// Throws: TypeError: Expected id to be a string, received number
//# sourceMappingURL=index.js.map