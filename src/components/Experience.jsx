import { useState } from "react";

const Experience = () => {
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
                <label htmlFor="">Company: </label>
                    <input type="text" value={company} onChange={handleCompany}/>

                    <label htmlFor="">Time: </label>
                    <input type="text" value={time} onChange={handleTime}/>

                    <label htmlFor="">Details: </label>
                    <input type="text" value={details} onChange={handleDetails}/>

                    <button onClick={handleExperienceInformations}>Send</button>
                </form>
            </div>
        </>
    )
}

export default Experience;