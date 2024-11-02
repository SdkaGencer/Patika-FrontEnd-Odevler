

const Dice = ({ value }) => {

return  (
    <div>
      {/* Zar resmini göster */}
      <img src={`/images/dice${value}.png`} alt={`Zar ${value}`} width="250" height="250" />
    </div>
  );
  
  

};

export default Dice;
