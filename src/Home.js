//import Schuyler from './Schuyler.jpeg';

export default function Home() {
    return (
        <div>
            <div className="container-fluid">
                <div className="m-5" id="home">
                    <div className="row text-center pt-5 mt-5 h-75" id="name">
                        <h1>
                            <p>Hi, I'm Rebecca,</p>
                        </h1>
                        <h2>
                            <p>and I'm excited to begin</p>
                            <p>a new career</p>
                            <p>as a</p>
                            <p>Web Developer!</p>
                        </h2>
                    </div>
                    <div className="px-4 mt-n5">
                        <div className="row text-center align-middle gx-4">
                            <div className="col m-5 ratio ratio-1x1" id="email">
                                <div className="d-flex flex-column justify-content-center align-items-center">
                                    <p>Email:</p>
                                    <h5>BajoranEH@hotmail.com</h5>
                                </div>
                            </div>
                            <div class="w-100 d-md-none d-block"></div>
                            <div className="col m-5 ratio ratio-1x1" id="linkedin">
                                <div className="d-flex flex-column justify-content-center align-items-center">
                                    <p>LinkedIn Profile:</p>
                                    <a href="https://www.linkedin.com/in/rebecca-kimpton-18a047154/"><h5>linkedin.com/in/rebecca-kimpton</h5></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}