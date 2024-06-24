const General = ({ name, email, phoneNumber, location }) => {

    return (
        <>
        <section>
                <h2>{name}</h2>
                <p>Personal information:</p>
                <p>Email: {email}</p>
                <p>Phone Number: {phoneNumber}</p>
                <p>Location: {location}</p>
        </section>
        </>
    )

}

export default General;