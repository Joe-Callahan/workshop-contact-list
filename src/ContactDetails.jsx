const ContactDetails = (props) => {
  return (
    <>
      <h2>{props.selectedContact.name}</h2>
      <p>Phone: {props.selectedContact.phone}</p>
      <p>Email: {props.selectedContact.email}</p>
      <p>Address: {props.selectedContact.address.street}{", "}
        {props.selectedContact.address.suite}</p>
      <p>{props.selectedContact.address.city}{" "}
      {props.selectedContact.address.zipcode}</p>
      <button onClick={() => {props.setSelectedContact({}) }}>Back</button>
    </>
  )
}

export default ContactDetails