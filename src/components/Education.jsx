const Education = ({ courses, setCourses }) => {

    return (
        <>
            <section className="flex flex-col gap-8">
                <h2 className="text-xl">Education</h2>
                <div>{courses.map(course => (
                    <div className="flex flex-col gap-8 border-2 border-gray-100 px-8 py-2 rounded" key={course.id}>
                        <p>Course: {course.courseName}</p>
                        <p>Institute: {course.institute}</p>
                        <p>Workload: {course.hour}</p>
                        <button className="hover:bg-red-500 rounded hover:text-white w-24 border-2 border-gray-100 self-start" onClick={() => {setCourses(courses.filter(a => a.id !== course.id))}}>x</button>
                    </div>
                ))}
                </div>
            </section>
        </>
    )
}

export default Education;