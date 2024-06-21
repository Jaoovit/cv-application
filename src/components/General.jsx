const General = ({ name, email, phoneNumber, location }) => {

    return (
        <>
        <section>
                <h2>Personal information</h2>
                <p>Name: {name}</p>
                <p>Email: {email}</p>
                <p>Phone Number: {phoneNumber}</p>
                <p>Location: {location}</p>
        </section>
        </>
    )

}

export default General;