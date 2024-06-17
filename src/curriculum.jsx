import { useState } from "react";

const Curriculum = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [location, setLocation] = useState("");

    function handleFirstname(e) {
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

    const [indexCourse, setIndexCourse] = useState(0)
    const [courses] = useState([])


    function handleCourseInformations (e) {
        e.preventDefault()
        setIndexCourse(1 + indexCourse)
        const newCourse = {
            id: indexCourse,
            courseName: courseName,
            institute: institute,
            hour: hour
        }
        courses.push(newCourse)
    }

    const listCourses = courses.map((courses) => 
        <div key={courses.id}>
            <p>{courses.courseName}</p>
            <p>{courses.institute}</p>
            <p>{courses.hour}</p>
        </div>
    )

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

    const [indexExperience, setIndexExperience] = useState(0)
    const [experience] = useState([])


    function handleExperienceInformations (e) {
        e.preventDefault()
        setIndexExperience(1 + indexExperience)
        const newExperience = {
            id: indexExperience,
            company: company,
            time: time,
            details: details
        }
        experience.push(newExperience)
        console.log(experience)
    }

    const listExperience = experience.map((experience) => 
        <div key={experience.id}>
            <p>{experience.company}</p>
            <p>{experience.time}</p>
            <p>{experience.details}</p>
        </div>
    )

    return (
        <>
            <div>
                <form action="#">
                    <label htmlFor="">Name: {" "}</label>
                    <input type="text" value={name} onChange={handleFirstname} />

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

                    <button onClick={handleCourseInformations}>Send</button>
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

                    <button onClick={handleExperienceInformations}>Send</button>
                </form>
            </div>
            <div>
            <h1>Curriculum</h1>
            <section>
                <h2>Personal information</h2>
                <p>Name: {name}</p>
                <p>Email: {email}</p>
                <p>Phone Number: {phoneNumber}</p>
                <p>Location: {Location}</p>
            </section>
            <section>
                <h2>Education</h2>
                <div>{listCourses}</div>
            </section>
            <section>
                <h2>Experience</h2>
                <div>{listExperience}</div>
            </section>
            </div>
        </>
    )

    
}

export default Curriculum