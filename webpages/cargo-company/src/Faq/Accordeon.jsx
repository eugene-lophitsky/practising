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
            className="accordion-item__header"
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
      content: 'Стоимость доставки рассчитывается исходя из веса, объёма груза, расстояния и выбранного способа транспортировки (авиа, море, ж/д).'
    },
    {
      title: 'Как происходит оплата доставки товара?',
      content: 'Оплата доставки происходит после оформления заказа, доступны варианты: онлайн-оплата, банковский перевод или наличные при получении.'
    },
    {
      title: 'Как быстро оформить заказ на доставку из Китая в Россию?',
      content: 'Для быстрого оформления заказа заполните форму на сайте, укажите детали груза, и менеджер свяжется с Вами в течение 15 минут.'
    },
    {
      title: 'Можно ли через Вас оплатить товар поставщику?',
      content: 'Да, мы предоставляем такую услугу, мы можем взять оплату товара в Китае на себя. Если у вас нет валютного счёта, то можете оплатить товар в рублях на наш счет в России..'
    },
    {
      title: 'В чём особенность КАРГО доставки из Китая?',
      content: 'КАРГО доставка из Китая позволяет перевозить сборные грузы, что снижает стоимость за счёт объединения партий разных отправителей.'
    },
    {
      title: 'Каков срок доставки из Китая?',
      content: 'Срок доставки из Китая зависит от способа: авиа — 3–10 дней, море — 20–45 дней, ж/д — 14–25 дней, авто — 10–20 дней.'
    }
  ];

  return (
    <div>
      <Accordion items={accordionItems} />
    </div>
  );
};

export default App;