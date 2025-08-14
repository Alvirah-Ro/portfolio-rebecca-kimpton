export default function Current() {
    return (
        <div className="container">
            <h1 className="m-3 mt-5 p-3 text-center rebecca">CURRENT LEARNING AND PROJECTS</h1>
            <div className="mx-4 p-4 lavender rebeccaBackground">
                <div className="mx-4">
                    <h4 className="py-2">Software Testing</h4>
                    <ul>
                        <li>I am currently reading the ISTQB Certified Tester Foundation Level Syllabus to learn more about software testing.  Upon completion, I am planning on practicing writing my own test plans, test cases, and bug reports.</li>
                    </ul>
                    <h4 className="py-2">Microsoft Learn Learning Path: Get started with C#</h4>
                    <ul>
                        <li>I recently completed Part 1 of this Learning Path: Write your first code using C#.  Next step is Part 2: Create and Run Simple C# Console Applications</li>
                    </ul>
                    <h4 className="py-2">Express Book Reviews App</h4>
                    <ul>
                        <li>I'm currently working on updating a former course project, an Express app using Node.js.  I am incorporating MongoDB as the database and adding extra functionality.  I have updated the login/logout logic and public user routes.  I am currently working on the routes for registered users which includes adding, updating, and deleting book reviews.  View on <a className= "white" href= "https://github.com/Alvirah-Ro/expressBookReviews">GitHub.</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
