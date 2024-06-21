const Experience = ({ experiences, setExperiences }) => {

    return (
        <>
           <section>
                <h2>Experience</h2>
                <div>{experiences.map(experience => (
                    <div key={experience.id}>
                        <p>Company: {experience.company}</p>
                        <p>Time: {experience.time}</p>
                        <p>Details: {experience.details}</p>
                        <button onClick={() => {setExperiences(experiences.filter(a => a.id !== experience.id))}}>x</button>
                    </div>
                ))}
                </div>
            </section> 
        </>
    )
}

export default Experience;