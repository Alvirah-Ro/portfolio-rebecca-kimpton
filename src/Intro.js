import Schuyler from './Schuyler.jpeg';

export default function Intro() {
    return (
        <div className="container">
        <div className="row">
            <div className="col" id="top">
                <h1>Cats are cool</h1>
            </div>
        </div>
        <div className="row">
            <div className="col-8" id="intro">
                <h2>
                    <p>Hi, I'm Rebecca</p>
                    <p>and I'm excited to begin</p>
                    <p>a new career</p>
                    <p>as a</p>
                    <p>Web Developer!</p>
                </h2>
            </div>
            <div className="col">
                <img src={Schuyler} alt="profile picture"/>
            </div>
        </div>
    </div>

    )
}