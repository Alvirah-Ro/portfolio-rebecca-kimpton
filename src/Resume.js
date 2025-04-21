import Certifications from './Certifications';
import WorkExperience from './WorkExperience';
import Education from './Education';

export default function Resume() {
    return (
        <div>
            <Certifications />
            <WorkExperience />
            <Education />
        </div>
    )
}