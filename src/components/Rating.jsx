

const Rating = (props) => {
  const { children } = props;

  const filledStars = Math.round(children);
  const emptyStars = 5 - filledStars;

//   const filledStar = '★';
//   const emptyStar = '☆';

  return (
    <div>
      {'★'.repeat(filledStars)}
      {'☆'.repeat(emptyStars)}
    </div>
  );
};

export default Rating;

