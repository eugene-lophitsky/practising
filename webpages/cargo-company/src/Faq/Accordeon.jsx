import { useState } from 'react';

const styles = {
  accordion: {
    width: '100%',
    maxWidth: '600px',
    margin: '0 auto',
    fontFamily: 'Arial, sans-serif',
  },
  item: {
    border: '1px solid #ddd',
    borderRadius: '5px',
    marginBottom: '10px',
    overflow: 'hidden',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '15px',
    backgroundColor: '#f5f5f5',
    cursor: 'pointer',
    borderBottom: '1px solid #ddd',
  },
  title: {
    margin: 0,
    fontSize: '16px',
  },
  button: {
    width: '24px',
    height: '24px',
    borderRadius: '50%',
    backgroundColor: '#fff',
    border: '1px solid #999',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    transition: 'transform 0.3s ease',
  },
  content: {
    padding: '15px',
    backgroundColor: '#fff',
  },
  arrowRight: {
    width: 0,
    height: 0,
    borderTop: '5px solid transparent',
    borderBottom: '5px solid transparent',
    borderLeft: '8px solid #333',
    transition: 'transform 0.3s ease',
  },
  arrowUp: {
    width: 0,
    height: 0,
    borderLeft: '5px solid transparent',
    borderRight: '5px solid transparent',
    borderBottom: '8px solid #333',
    transition: 'transform 0.3s ease',
  }
};

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleItem = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div style={styles.accordion}>
      {items.map((item, index) => (
        <div key={index} style={styles.item}>
          <div 
            style={styles.header} 
            onClick={() => toggleItem(index)}
          >
            <h3 style={styles.title}>{item.title}</h3>
            <button style={styles.button}>
        
              <div 
                style={activeIndex === index ? styles.arrowUp : styles.arrowRight} 
              />
            </button>
          </div>
          {activeIndex === index && (
            <div style={styles.content}>
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
      title: 'Раздел 1',
      content: 'Содержимое первого раздела аккордеона.'
    },
    {
      title: 'Раздел 2',
      content: 'Содержимое второго раздела аккордеона.'
    },
    {
      title: 'Раздел 3',
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