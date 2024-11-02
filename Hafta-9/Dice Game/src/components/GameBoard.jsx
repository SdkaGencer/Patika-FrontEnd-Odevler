// GameBoard.jsx
import React, { useState } from 'react';
import Dice from './Dice';

const GameBoard = () => {
  const [playerName, setPlayerName] = useState('Player 1'); // Kullanıcı adı için state
  const [playerDice, setPlayerDice] = useState(3); // Player zar değeri
  const [pcDice, setPcDice] = useState(5);         // PC zar değeri
  const [result, setResult] = useState(''); // Sonuç durumu için state

 
  const handleNameChange = (e) => {
    setPlayerName(e.target.value); // Input değiştikçe state'i güncelle
  };


  const rollDice = () => {
    setResult('Zarlar dönüyor...'); // Sonuç kısmına geçici bir mesaj
    const interval = setInterval(() => {
      setPlayerDice(Math.floor(Math.random() * 6) + 1);
      setPcDice(Math.floor(Math.random() * 6) + 1);
    }, 100); // Zar yüzleri her 100 ms'de bir değişecek

  // 3 saniye sonra döngüyü durdur ve gerçek sonucu göster
  setTimeout(() => {
    clearInterval(interval);
    const finalPlayerRoll = Math.floor(Math.random() * 6) + 1;
    const finalPcRoll = Math.floor(Math.random() * 6) + 1;
    setPlayerDice(finalPlayerRoll);
    setPcDice(finalPcRoll);

    // Sonucu hesapla
    if (finalPlayerRoll > finalPcRoll) {
      setResult(`${playerName} Kazandı!`);
    } else if (finalPlayerRoll < finalPcRoll) {
      setResult('PC Kazandı!');
    } else {
      setResult('Beraberlik!');
    }
  }, 3000); // 3 saniye boyunca zar dönecek
};


  return (
    <div className='container'>
      <h2>Draw! 🤝</h2>
      
      {/* Kullanıcı Adı Girişi */}
      <input
        type="text"
        value={playerName}
        onChange={handleNameChange}
        placeholder="İsmin"
      />

      <p>Player 1: {playerName}</p> {/* Güncellenen adı göster */}
     
     <div className='dices'>
        <div className="dice">
             {/* Player 1 Zar */}
             <h3>Player 1 Zar</h3>
             <Dice value={playerDice} />
        </div>

        <div className="dice">
            {/* PC Zar */}
            <h3>PC Zar</h3>
            <Dice value={pcDice} />
        </div>
     </div>

      {/* Zar atma butonu */}
      <button onClick={rollDice}>Zar At</button>

      <p className='result'>{result}</p> {/* Sonuç mesajı */}

    </div>
  );
};

export default GameBoard;
