
function Greetings(props) {

    const { idioma, children } = props;
  
    const greetingsMap = {
      de: `Hallo ${children}!`,
      en: `Hello ${children}!`,
      es: `¡Hola ${children}!`,
      fr: `Bonjour ${children}!`,
    };
  
    const greetingText = greetingsMap[idioma] || `Hello ${children}!`;
  
    return <div>{greetingText}</div>;
  };
  
  export default Greetings;