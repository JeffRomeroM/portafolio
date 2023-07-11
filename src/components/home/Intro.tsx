import { useEffect, useState } from 'react';
import './home.css'

export const Intro = ({ words }:any) => {
  const [text, setText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    let timer:any;
    const currentWord = words[currentIndex];

    if (text === currentWord) {
      timer = setTimeout(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === words.length - 1 ? 0 : prevIndex + 1
        );
      }, 2000); // Espera 1 segundo antes de pasar a la siguiente palabra
    } else {
      timer = setTimeout(() => {
        setText((prevText) =>
          currentWord.substring(0, prevText.length + 1)
        );
      }, 150); // Velocidad de escritura: 150 milisegundos
    }

    return () => clearTimeout(timer);
  }, [currentIndex, text, words]);

  useEffect(() => {
    setText('');
  }, [currentIndex]);

  return (
    <div className='intro'>
      <h1 className='intro--name'>Jeffrin Romero</h1>;
      <h1 className='intro--hability'>I'm {text}</h1>

      <div className="intro--btn">
        <button>Conocer mas</button>

        <h3 className="intro--description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum libero aspernatur eaque qui? Rem dolorem possimus accusamus sed, pariatur deserunt consequuntur id iusto adipisci. Expedita perspiciatis vitae enim molestias nihil!
        </h3>
      </div>

      

 
    </div>
  )
};

