import Schuyler from './Schuyler.jpeg';
import Polls_HomePage from './Polls_HomePage.jpeg';
import PollsHomePage from './PollsHomePage.jpg';

export default function Projects() {
    return (
        <div className="container">
            {/* <div className="grid gap-3"> */}
                <div className="row column-gap-3 mt-5">
                    <div className="col p-3">
                        <div className="border border-dark text-center p-3">
                            <h4>Polls App</h4>
                            <p>Polls is a Django app that allows users to view and vote on various fun questions.</p>
                            <img className="object-fit-contain mt-n5" src={PollsHomePage} alt="Home Page of Polls App" />
                        </div>
                    </div>
                </div>
                <div className="row column-gap-3 mt-5">
                    <div className="col p-3" style={{ backgroundColor: '#fc6c85' }}>
                        <img className="img-fluid" src={Schuyler} alt="project photo" />
                        <h4>Project Name</h4>
                        <p>Project brief description</p>
                    </div>
                </div>
                <div className="row column-gap-3 mt-3 mb-5">
                    <div className="col p-3" style={{ backgroundColor: '#ffd1dc' }}>
                        <img className="img-fluid" src={Schuyler} alt="project photo" />
                        <h4>Project Name</h4>
                        <p>Project brief description</p>
                    </div>
                    <div className="col p-3" style={{ backgroundColor: '#e75480' }}>
                        <img className="img-fluid" src={Schuyler} alt="project photo" />
                        <h4>Project Name</h4>
                        <p>Project brief description</p>
                    </div>
                {/* </div> */}
            </div>    
            <h5>Git Hub link:</h5><a href="https://github.com/Alvirah-Ro">https://github.com/Alvirah-Ro</a>
        </div>
    )
}