// import { Link } from 'react-router-dom';


export default function Current() {
    return (
        <div className="container">
            <h1 className="m-3 mt-5 p-3 text-center rebecca">CURRENT LEARNING AND PROJECTS</h1>
            <div className="mx-4 p-4 lavender rebeccaBackground">
                <div className="mx-4">

                    {/* <h4 className="py-2">Conversion Page</h4>
                    <ul>
                        <li>September 28th: I've created a conversion page on this site to help me streamline calculations when reviewing invoices at work.</li>
                            Check out the top nav link or view the page <Link to="/conversion" className="white">here</Link>.
                    </ul> */}

                    <h4 className="py-2">More Typescript</h4>
                    <ul>
                        <li>September 17th: After completing the Angular tutorial, I am continuing some practice with typescript using an array of mock patient data. </li>
                            View on <a href="https://github.com/Alvirah-Ro/PatientsApp" className="white">GitHub</a>.
                    </ul>

                    <h4 className="py-2">Angular</h4>
                    <ul>
                        <li>September 26th: I have completed the official Angular app tutorial and am now editing and enhancing the homes app on my own.  Today I worked on adding validations and a success message to the form submission in the details component. </li>
                            View on <a href="https://github.com/Alvirah-Ro/HomesApp" className="white">GitHub</a>.
                    </ul>

                    <h4 className="py-2">SQL</h4>
                    <ul>
                        <li>August 17th: I just downloaded PostgreSQL and the Northwind Database.  I am using them to practice commands taught in the W3Schools tutorial.</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
