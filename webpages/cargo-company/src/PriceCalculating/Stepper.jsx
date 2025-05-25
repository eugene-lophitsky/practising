import { useState } from 'react';

const Stepper = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      id: 0,
      label: '1',
      content: (
        <>
          <p>Строка первого таба</p>
        </>
      )
    },
    {
      id: 1,
      label: '2',
      content: (
        <>
          <p>Строка второго таба</p>
        </>
      )
    },
    {
      id: 2,
      label: '3',
      content: (
        <>
          <p>Строка третьего таба</p>
        </>
      )
    }
  ];

  // Стили в виде JavaScript объектов
  const styles = {
    container: {
      maxWidth: '600px',
      margin: '0 auto',
      fontFamily: 'Arial, sans-serif',
      padding: '24px',
      backgroundColor: '$second-black',
      borderRadius: '20px',
    },
    tabsContainer: {
      display: 'flex',
      justifyContent: 'center',
      marginBottom: '32px'
    },
    tabButton: {
      width: '60px',
      height: '60px',
      borderRadius: '50%',
      backgroundColor: '#e8f5e9',
      color: '#2e7d32',
      border: 'none',
      cursor: 'pointer',
      fontSize: '24px',
      fontWeight: 'bold',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      margin: '0 12px',
      transition: 'all 0.3s ease'
    },
    tabButtonActive: {
      backgroundColor: '#81c784',
      color: '#fff'
    },
    tabButtonHover: {
      backgroundColor: '#66bb6a',
      color: '#fff'
    },
    contentBox: {
      padding: '24px',
      backgroundColor: '#fff',
      borderRadius: '8px',
      minHeight: '100px'
    },
    contentText: {
      margin: '0 0 12px 0',
      lineHeight: '1.5'
    }
  };

  const handleMouseEnter = (e) => {
    if (parseInt(e.target.dataset.tabid) !== activeTab) {
      e.target.style.backgroundColor = styles.tabButtonHover.backgroundColor;
      e.target.style.color = styles.tabButtonHover.color;
    }
  };

  const handleMouseLeave = (e) => {
    if (parseInt(e.target.dataset.tabid) !== activeTab) {
      e.target.style.backgroundColor = styles.tabButton.backgroundColor;
      e.target.style.color = styles.tabButton.color;
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.tabsContainer}>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            data-tabid={tab.id}
            style={{
              ...styles.tabButton,
              ...(activeTab === tab.id ? styles.tabButtonActive : {})
            }}
            onClick={() => setActiveTab(tab.id)}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {tab.label}
          </button>
        ))}
      </div>
      
      <div style={styles.contentBox}>
        {tabs[activeTab].content}
      </div>
    </div>
  );
};

export default Stepper;