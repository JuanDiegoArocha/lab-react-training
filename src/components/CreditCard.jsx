

function CreditCard(props) {
  const {
    type,
    number,
    expirationMonth,
    expirationYear,
    bank,
    owner,
    bgColor,
    color,
  } = props;

  const cardNumberDisplay = `•••• •••• •••• ${number.slice(-4)}`;

  const cardLogo =
    type === 'Visa' ? (
      <img
        src="https://cdn4.iconfinder.com/data/icons/payment-method/160/payment_method_visa_card-512.png"
        alt="Visa"
        height="30px"
      />
    ) : (
      <img
        src="https://cdn4.iconfinder.com/data/icons/payment-method/160/payment_method_master_card-512.png"
        alt="Master Card"
        height="30px"
      />
    );

  const cardStyle = {
    backgroundColor: bgColor,
    color: color,
    padding: '20px',
    borderRadius: '10px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    width: '300px',
    margin: '10px',
  };

  return (
    <div style={cardStyle}>
      <div style={{ marginBottom: '10px' }}>{cardLogo}</div>
      <div style={{ fontSize: '24px', marginBottom: '10px' }}>
        {cardNumberDisplay}
      </div>
      <div>
        <span>Expires: </span>
        {expirationMonth.toString().padStart(2, '0')}/
        {expirationYear.toString().slice(-2)}
        <span style={{ marginLeft: '10px' }}>{bank}</span>
      </div>
      <div>{owner}</div>
    </div>
  );
};

export default CreditCard;
