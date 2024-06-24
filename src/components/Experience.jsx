const Experience = ({ experiences, setExperiences }) => {

    return (
        <>
           <section className="flex flex-col gap-8">
                <h2 className="text-xl">Experience</h2>
                <div>{experiences.map(experience => (
                    <div className="flex flex-col gap-8 border-2 border-gray-100 px-8 py-2 rounded" key={experience.id}>
                        <p>Company: {experience.company}</p>
                        <p>Time: {experience.time}</p>
                        <p>Details: {experience.details}</p>
                        <button className="hover:bg-red-500 rounded hover:text-white w-24 border-2 border-gray-100 self-start" onClick={() => {setExperiences(experiences.filter(a => a.id !== experience.id))}}>x</button>
                    </div>
                ))}
                </div>
            </section> 
        </>
    )
}

export default Experience;