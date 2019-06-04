const createLeahComponent = () => {
    return `
    <div class="student">
                <h1>Leah Hoefling</h1>
                <section>Day cohort 26</section>
                <aside>
                    Loves plants and is <em>very</em> fashionable.
                </aside>
            </div>
    `
}
const studentContainer = document.querySelector("#container");

studentContainer.innerHTML += createLeahComponent();

const studentArray = [
    {
        name: "Chris Miller",
        subject: "History",
        info: "Failed last exam",
        score: 59
    },
    {
        name: "Courtney Seward",
        subject: "History",
        info: "Has completed all homework",
        score: 91
    },
    {
        name: "Garrett Ward",
        subject: "History",
        info: "Wonderful at helping other students",
        score: 88
    },
    {
        name: "John Dulaney",
        subject: "History",
        info: "Has never missed a class or exam",
        score: 92
    },
    {
        name: "Greg Lawrence",
        subject: "History",
        info: "Sub-par performance all around",
        score: 64
    },
    {
        name: "Leah Duvic",
        subject: "History",
        info: "Wonderful student",
        score: 97
    },
    {
        name: "Jesse Page",
        subject: "History",
        info: "Smokes too much. Distracting.",
        score: 76
    },
    {
        name: "Kevin Haggerty",
        subject: "History",
        info: "Falls asleep in class",
        score: 79
    },
    {
        name: "Max Wolf",
        subject: "History",
        info: "Talks too much",
        score: 83
    },
    {
        name: "Lissa Goforth",
        subject: "History",
        info: "Asks pointless, unrelated questions",
        score: 78
    },
    {
        name: "Tyler Bowman",
        subject: "History",
        info: "When was the last time he attended class?",
        score: 48
    },
    {
        name: "Ray Medrano",
        subject: "History",
        info: "Needs to contribute to in-class discussions",
        score: 95
    }
]

const createStudentComponent = (name, subject, info, status) => {
    return `
    <div class="student">
                <h1 class=${status}>${name}</h1>
                <section>${subject}</section>
                <aside>
                    ${info}
                </aside>
            </div>
    `
}
studentContainer.innerHTML += createStudentComponent("Kristen", "Science", "She has a really cute pupper");

// for (let i = 0; i < studentArray.length; i++) {
//     studentContainer.innerHTML += createStudentComponent(studentName, studentSubject, studentInfo);
// }

for (const student of studentArray) {
    let studentComponent = ""
    let studentName = student.name;
    let studentSubject = student.subject;
    let studentInfo = student.info;
    if (student.score >= 60) {
        studentComponent = createStudentComponent(studentName, studentSubject, studentInfo, "passing");
    } else {
        studentComponent = createStudentComponent(studentName, studentSubject, studentInfo, "failing");
    }
    studentContainer.innerHTML += studentComponent
}
