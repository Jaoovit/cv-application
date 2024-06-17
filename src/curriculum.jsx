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

    const [index, setIndex] = useState(0)
    const [courses] = useState([])


    function handleCourseInformations (e) {
        e.preventDefault()
        setIndex(1 + index)
        const newCourse = {
            id: index,
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

    return (
        <>
            <div>
                <form>
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
            <form>
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
            </div>
        </>
    )

    
}

export default Curriculum