const General = ({ name, email, phoneNumber, location }) => {

    return (
        <>
        <section className="flex flex-col gap-8">
                <h2 className="text-5xl bg-blue-100 px-64 py-16">{name}</h2>
                <div className="flex flex-col gap-8">
                    <p className="text-xl">Personal information</p>
                    <p>Email: {email}</p>
                    <p>Phone Number: {phoneNumber}</p>
                    <p>Location: {location}</p>
                </div>
        </section>
        </>
    )

}

export default General;