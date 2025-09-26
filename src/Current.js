export default function Current() {
    return (
        <div className="container">
            <h1 className="m-3 mt-5 p-3 text-center rebecca">CURRENT LEARNING AND PROJECTS</h1>
            <div className="mx-4 p-4 lavender rebeccaBackground">
                <div className="mx-4">

                    <h4 className="py-2">More Typescript</h4>
                    <ul>
                        <li>September 17th: After completing the Angular tutorial, I am continuing some practice with typescript using an array of mock patient data. </li>
                            View on <a href="https://github.com/Alvirah-Ro/PatientsApp" className="white">GitHub</a>
                    </ul>

                    <h4 className="py-2">Angular</h4>
                    <ul>
                        <li>September 26th: I have completed the official tutorial and am now editing and enhancing the app on my own.  Today I worked on adding validations and a success message to the form submission in the details component. </li>
                        <li>August 29th: I'm currently building an Angular application, an app to find rental homes, through the official tutorial in my local development environment.  </li>
                            View on <a href="https://github.com/Alvirah-Ro/HomesApp" className="white">GitHub</a>
                    </ul>

                    <h4 className="py-2">SQL</h4>
                    <ul>
                        <li>August 17th: I just downloaded PostgreSQL and the Northwind Database.  I am using them to practice commands taught in the W3Schools tutorial.</li>
                    </ul>
                    
                    <h4 className="py-2">Software Testing</h4>
                    <ul>
                        <li>August 14th: I am currently reading the ISTQB Certified Tester Foundation Level Syllabus to learn more about software testing.  Upon completion, I am planning on practicing writing my own test plans, test cases, and bug reports.</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
