const Education = ({ courses, setCourses }) => {

    return (
        <>
            <section>
                <h2>Education</h2>
                <div>{courses.map(course => (
                    <div key={course.id}>
                        <p>Course: {course.courseName}</p>
                        <p>Institute: {course.institute}</p>
                        <p>Workload: {course.hour}</p>
                        <button onClick={() => {setCourses(courses.filter(a => a.id !== course.id))}}>x</button>
                    </div>
                ))}
                </div>
            </section>
        </>
    )
}

export default Education;