import  { useState } from 'react';

function Stepper () {
  const [activeTab, setActiveTab] = useState(0);
  const [readFile, setReadFile] = useState();
    function handleThis (event) {
      let url = URL.createObjectURL(event.target.files[0]);
      setReadFile(url);
       URL.revokeObjectURL('');
  } 

  const tabs = [
    {
      id: 0,
      label: '1',
      content: (
        <div className="stepper-body">
            <div className="stepper-fields">
              <div className="stepper-fields-set">
                  <label htmlFor="ware-category" className="input-label">Категория товара:</label>
                  <input type="text" placeholder="Категория товара:" name="ware-category" className="textField"/>
                  <label htmlFor="cargo-weight" className="input-label">Вес груза (кг):</label>
                  <input type="text" placeholder="Введите вес" name="cargo-weight" className="textField"/>
                  <label htmlFor="insurance" className="input-checkbox-label"><input type="checkbox" name="insurance" id="" className="input-checkbox input-checkbox--margin"/> Страховка</label>
                  <label htmlFor="customs-clearance" className="input-checkbox-label"><input type="checkbox" name="customs-clearance" id="" className="input-checkbox"/>Таможенное оформление</label>
              </div>
              <div className="stepper-fields-set">
                    <label htmlFor="cargo-price" className="input-label">Стоимость груза:</label>
                    <input type="text" placeholder="Введите стоимость" name="cargo-price" className="textField"/>
                    <label htmlFor="cargo-volume" className="input-label">Объём груза:</label>
                    <input type="text" placeholder="Введите объём" name="cargo-volume" className="textField"/>
                    <label htmlFor="insurance" className="input-label">Код ТН ВЭД:</label>
                    <input type="type" name="insurance" id="" placeholder="Введите код" className="textField"/>
              </div>
            </div>
            <div className="stepper__input-file">
                           <label htmlFor="filePicker" className="fileInputWrapper">
                           <span className="placeholder">Загрузить фото товара</span>
                           </label>
                           <input type="file" name="" id="inputFile" onChange={handleThis} className="filePicker" />
                           <div className="loadImageWrapper">
                            <img src={readFile} alt="" className="loadImage" />
                            </div>
            </div>
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