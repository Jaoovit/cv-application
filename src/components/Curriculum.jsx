import General from "./General"
import Education from "./Education";
import Experiences from "./Experience";
import { useState } from "react";

const Curriculum = () => {

    {/*General information*/}

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [location, setLocation] = useState("");

    function handleName(e) {
        return setName(e.target.value);
    }

    function handleEmail(e) {
        return setEmail(e.target.value);
    }

    function handlePhoneNumber(e) {
        return setPhoneNumber(e.target.value);
    }

    function handleLocation(e) {
        return setLocation(e.target.value)
    }

    {/*Education information*/}

    const [courseName, setCourseName] = useState("")
    const [institute, setInstitute] = useState("");
    const [hour, setHour] = useState("");

    function handleCourse(e) {
        return setCourseName(e.target.value)
    }
    function handleInstitute(e) {
        return setInstitute(e.target.value)
    }

    function handleHour(e) {
        return setHour(e.target.value)
    }
    const [courses, setCourses] = useState([])
    const [indexCourse, setIndexCourse] = useState(0)

    
    function Course (id, courseName, institute, hour) {
        this.id = id
        this.courseName = courseName,
        this.institute = institute,
        this.hour = hour
    }
    

    function createCourse(e) {

        e.preventDefault()
        setIndexCourse(indexCourse + 1)
        const newCourse = new Course (indexCourse, courseName, institute, hour);
        courses.push(newCourse);
        setCourses(courses)
        console.log(courses)
    }

    {/*Eperience information*/}

    const [company, setCompany] = useState("");
    const [time, setTime] = useState("");
    const [details, setDetails] = useState("");

    function handleCompany(e) {
        return setCompany(e.target.value);
    }

    function handleTime(e) {
        return setTime(e.target.value);
    }

    function handleDetails(e) {
        return setDetails(e.target.value);
    }

    const [experiences, setExperiences] = useState([])
    const [indexExperience, setIndexExperience] = useState(0)

    function Experience (id, company, time, details) {
        this.id = id
        this.company = company,
        this.time = time,
        this.details = details
    }

    function createExperience(e) {

        e.preventDefault()
        setIndexExperience(indexExperience + 1)
        const newExperience = new Experience (indexExperience, company, time, details);
        experiences.push(newExperience);
        setExperiences(experiences)
    }

    return (
        <div className="flex flex-row justify-around">
            <div>
                <div className="flex flex-col gap-12 py-8">
                    <h1 className="text-xl">Insert your personal informations</h1>
                    <form action="#" className="flex flex-col gap-8">
                        <div>
                            <label htmlFor="">Name: {" "}</label>
                            <input type="text" value={name} onChange={handleName}/>
                        </div>
                        <div>
                            <label htmlFor="">Email: {" "}</label>
                            <input type="email" value={email} onChange={handleEmail}/>
                        </div>
                        <div>
                            <label htmlFor="">Phone Number: {" "}</label>
                            <input type="text" value={phoneNumber} onChange={handlePhoneNumber}/>
                        </div>
                        <div>
                            <label htmlFor="">Location: {" "}</label>
                            <input type="text" value={location} onChange={handleLocation}/>
                        </div>
                    </form>
                </div>
                <div className="flex flex-col gap-8 py-8">
                    <h1 className="text-xl">Add your courses and training</h1>
                    <form action="#" className="flex flex-col gap-8 relative">
                        <div>
                            <label htmlFor="">Course: </label>
                            <input type="text" value={courseName} onChange={handleCourse}/>
                        </div>
                        <div>
                            <label htmlFor="">Institute: </label>
                            <input type="text" value={institute} onChange={handleInstitute}/>
                        </div>
                        <div>
                            <label htmlFor="">Hours: </label>
                            <input type="text" value={hour} onChange={handleHour}/>
                        </div>
                        <button className="hover:bg-green-400 rounded hover:text-white w-24 border-2 border-gray-100 self-end" onClick={createCourse}>Add+</button>
                    </form>
                </div>
                <div className="flex flex-col gap-8 py-8">
                    <h1 className="text-xl">Add your work experience</h1>
                    <form action="#" className="flex flex-col gap-8">
                        <div>
                            <label htmlFor="">Company: </label>
                            <input type="text" value={company} onChange={handleCompany}/>
                        </div>
                        <div>
                            <label htmlFor="">Time: </label>
                            <input type="text" value={time} onChange={handleTime}/>
                        </div>
                        <div>
                            <label htmlFor="">Details: </label>
                            <input type="text" value={details} onChange={handleDetails}/>
                        </div>
                        <button className="hover:bg-green-400 rounded hover:text-white w-24 border-2 border-gray-100 self-end" onClick={createExperience}>Add+</button>
                    </form>
                </div>
            </div>           
            <div className="flex flex-col gap-12 py-8">
            <General name={name} email={email} phoneNumber={phoneNumber} location={location}/>
            <Education  courses={courses} setCourses={setCourses}/>
            <Experiences experiences={experiences} setExperiences={setExperiences}/>
            </div>
        </div>
    )

    
}

export default Curriculum