

const DriverCard = (props) => {
  const { name, rating, img, car } = props;

  const stars = Math.round(rating);

  const filledStar = '★';
  const emptyStar = '☆';

  const ratingStars = filledStar.repeat(stars) + emptyStar.repeat(5 - stars);

  return (
    <div style={styles.container}>
      <img src={img} alt={name} style={styles.image} />
      <div style={styles.textContainer}>
        <h2 style={styles.name}>{name}</h2>
        <div style={styles.rating}>
          <span>{ratingStars}</span>
        </div>
        <p style={styles.car}>
          {car.model} - {car.licensePlate}
        </p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: '10px',
    borderRadius: '10px',
    backgroundColor: '#f5f5f5',
    margin: '10px',
  },
  image: {
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    objectFit: 'cover',
    marginRight: '10px',
  },
  textContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
  name: {
    margin: '0',
    fontSize: '20px',
  },
  rating: {
    fontSize: '24px',
    marginBottom: '10px',
  },
  car: {
    margin: '0',
  },
};

export default DriverCard;
