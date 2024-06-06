import { useState } from "react"

export default function General() {

    const [fistName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const fullName = fistName + " " + lastName;
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [location, setLocation] = useState("");

    function handleFirstname(e) {
        setFirstName(e.target.value);
    }

    function handleLastName(e) {
        setLastName(e.target.value);
    }

    function handleEmail(e) {
        setEmail(e.target.value);
    }

    function handlePhoneNumber(e) {
        setPhoneNumber(e.target.value);
    }

    function handleLocation(e) {
        setLocation(e.target.value)
    }

    return (
        <div>
            <div>
                <label htmlFor="">First Name: {" "}</label>
                <input type="text" value={fistName} onChange={handleFirstname} />

                <label htmlFor="">Last Name: {" "}</label>
                <input type="text" value={lastName} onChange={handleLastName}/>

                <label htmlFor="">Email: {" "}</label>
                <input type="email" value={email} onChange={handleEmail}/>

                <label htmlFor="">Phone Number: {" "}</label>
                <input type="text" value={phoneNumber} onChange={handlePhoneNumber}/>

                <label htmlFor="">Location: {" "}</label>
                <input type="text" value={location} onChange={handleLocation}/>
            </div>
            <div>
                <p>{fullName}</p>
                <p>{email}</p>
                <p>{phoneNumber}</p>
                <p>{location}</p>
            </div>
        </div>
    )   
}