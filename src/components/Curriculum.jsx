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
        <>
            <div>
                <form action="#">
                    <label htmlFor="">Name: {" "}</label>
                    <input type="text" value={name} onChange={handleName}/>

                    <label htmlFor="">Email: {" "}</label>
                    <input type="email" value={email} onChange={handleEmail}/>

                    <label htmlFor="">Phone Number: {" "}</label>
                    <input type="text" value={phoneNumber} onChange={handlePhoneNumber}/>

                    <label htmlFor="">Location: {" "}</label>
                    <input type="text" value={location} onChange={handleLocation}/>
                </form>
            </div>
            <div>
                <form action="#">
                    <label htmlFor="">Course: </label>
                    <input type="text" value={courseName} onChange={handleCourse}/>

                    <label htmlFor="">Institute: </label>
                    <input type="text" value={institute} onChange={handleInstitute}/>

                    <label htmlFor="">Hours: </label>
                    <input type="text" value={hour} onChange={handleHour}/>

                    <button onClick={createCourse}>Send</button>
                </form>
            </div>
            <div>
                <form action="#">
                <label htmlFor="">Company: </label>
                    <input type="text" value={company} onChange={handleCompany}/>

                    <label htmlFor="">Time: </label>
                    <input type="text" value={time} onChange={handleTime}/>

                    <label htmlFor="">Details: </label>
                    <input type="text" value={details} onChange={handleDetails}/>

                    <button onClick={createExperience}>Send</button>
                </form>
            </div>
            <div>
            <h1>Curriculum</h1>
            <General name={name} email={email} phoneNumber={phoneNumber} location={location}/>
            <Education  courses={courses} setCourses={setCourses}/>
            <Experiences experiences={experiences} setExperiences={setExperiences}/>
            </div>
        </>
    )

    
}

export default Curriculum