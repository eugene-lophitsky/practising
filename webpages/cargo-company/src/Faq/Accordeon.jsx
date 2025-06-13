/* eslint-disable react/prop-types */
import { useState } from 'react';


const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleItem = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="accordion">
      {items.map((item, index) => (
        <div key={index} className={activeIndex === index ? "item-opened" : "item"}>
          <div 
            className="header"
            onClick={() => toggleItem(index)}
          >
            <h3 className={activeIndex === index ? "title-opened" : "title"}>{item.title}</h3>
            <button className="button">
        
              <div 
                className={activeIndex === index ? "arrowUp" : "arrowRight"} 
              />
            </button>
          </div>
          {activeIndex === index && (
            <div className="content">
              {item.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

const App = () => {
  const accordionItems = [
    {
      title: 'Как рассчитывается стоимость доставки?',
      content: 'Содержимое первого раздела аккордеона.'
    },
    {
      title: 'Как происходит оплата доставки товара?',
      content: 'Содержимое второго раздела аккордеона.'
    },
    {
      title: 'Как быстро оформить заказ на доставку из Китая в Россию?',
      content: 'Содержимое третьего раздела аккордеона.'
    },
    {
      title: 'Можно ли через час оплатить товар поставщику?',
      content: 'Содержимое третьего раздела аккордеона.'
    },
    {
      title: 'В чём особенность КАРГО доставки из Китая?',
      content: 'Содержимое третьего раздела аккордеона.'
    },
    {
      title: 'Каков срок доставки из Китая?',
      content: 'Содержимое третьего раздела аккордеона.'
    }
  ];

  return (
    <div>
      <Accordion items={accordionItems} />
    </div>
  );
};

export default App;