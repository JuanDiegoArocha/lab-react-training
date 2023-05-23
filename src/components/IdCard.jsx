function IdCard(props) { 

    const { lastName, firstName, gender, height, birth, picture} = props;

  return (

    <div>
       <img src={picture} alt="Profile" />
      <div>
        <strong>First Name:</strong> {firstName}<br />
        <strong>Last Name:</strong> {lastName}<br />
        <strong>Gender:</strong> {gender}<br />
        <strong>Height:</strong> {height}cm<br />
        <strong>Birth:</strong> {birth.toDateString()}
      </div>

       



    </div>

  )


}

export default IdCard