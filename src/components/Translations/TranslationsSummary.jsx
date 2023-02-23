const TranslationsSummary = ({ characterArray }) => {
    return (
        {characterArray.map((x, index) => {
          if (x === " ") {
            return <StyledEnter key={index}></StyledEnter>;
          }
          if (!isNaN(x) || /[^a-zA-Z]/.test(x)) {
            return "";
          } else {
            return <img key={index} src={`img/${x}.png`} alt="img" />;
          }
        })}
    
    );
  };
export default TranslationsSummary