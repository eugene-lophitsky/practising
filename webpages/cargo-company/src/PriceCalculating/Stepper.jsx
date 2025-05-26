import  { useState } from 'react';

function Stepper () {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      id: 0,
      label: '1',
      content: (
        <div className="stepper-body">
            <div className="stepper-fields">
              <div className="stepper-fields-set">
                  <label htmlFor="ware-category">Категория товара:</label>
                  <input type="text" placeholder="Категория товара:" name="ware-category"/>
                  <label htmlFor="cargo-weight">Категория товара:</label>
                  <input type="text" placeholder="Вес груза (кг):" name="cargo-weight"/>
                  <label htmlFor="insurance"><input type="checkbox" name="insurance" id="" /> Страховка</label>
                  <label htmlFor="customs-clearance"><input type="checkbox" name="customs-clearance" id="" />Таможенное оформление</label>
              </div>
              <div className="stepper-fields-set">
                    <label htmlFor="cargo-price">Стоимость груза:</label>
                    <input type="text" placeholder="Введите стоимость" name="cargo-price"/>
                    <label htmlFor="cargo-volume">Объём груза (м3):</label>
                    <input type="text" placeholder="Вес груза (кг):" name="cargo-volume"/>
                    <label htmlFor="insurance">Код ТН ВЭД:</label>
                    <input type="type" name="insurance" id="" />
              </div>
            </div>
            <div className="stepper__input-file"></div>
            <a className="stepper__process-button"></a>
        </div>
      )
    },
    {
      id: 1,
      label: '2',
      content: (
        <>
          <p className="tab-content-text">Первая строка второго таба</p>
          <p className="tab-content-text">Вторая строка второго таба</p>
        </>
      )
    },
    {
      id: 2,
      label: '3',
      content: (
        <>
          <p className="tab-content-text">Первая строка третьего таба</p>
          <p className="tab-content-text">Вторая строка третьего таба</p>
        </>
      )
    }
  ];

  return (
    <div className="tabs-container">
      <div className="tabs-buttons">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`tab-button ${activeTab === tab.id ? 'tab-button-active' : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      
      <div className="tab-content">
        {tabs[activeTab].content}
      </div>
    </div>
  );
};

export default Stepper;