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

    ///

    const [course, setCourse] = useState("")
    const [institute, setInstitute] = useState("");
    const [hour, setHour] = useState("");


    function handleCourseInformations (e) {
        e.preventDefault()
        setCourse(e.target.value)
        setInstitute(e.target.value)
        setHour(e.target.value)
    }

    ///

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
                <input type="text"/>

                <label htmlFor="">Institute: </label>
                <input type="text"/>

                <label htmlFor="">Hours: </label>
                <input type="text"/>

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
            </section>
            </div>
        </>
    )
}

export default Curriculum