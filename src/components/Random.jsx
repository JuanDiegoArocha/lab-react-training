function Random(props) {

    
    const { min, max } = props;
  
    const getRandomNumber = (min, max) => {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    };
  
    const randomNumber = getRandomNumber(min, max);
  
    return <div>{randomNumber}</div>;
  };
  
  export default Random;