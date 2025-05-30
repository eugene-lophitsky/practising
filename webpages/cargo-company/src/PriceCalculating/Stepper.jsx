import  { useState } from 'react';
import checkmark from '/checkmark.png'; 

function Stepper () {
  const [activeTab, setActiveTab] = useState(0);

   function openPreviousTab (e) {
    e.preventDefault();
    setActiveTab(activeTab - 1)
  }

  function openNextTab (e) {
    e.preventDefault();
    if(activeTab < tabs.length - 1) {
      setActiveTab(activeTab + 1)
    }
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
                           <input type="file" name="" id="inputFile"  className="filePicker" />
            </div>
            <a href="#" className="stepper__button" onClick={openNextTab}>
              <span className="stepper__button-text">Следующий шаг</span>
              <span className="stepper__button-icon"></span>
            </a>
        </div>
      )
    },
    {
      id: 1,
      label: '2',
      content: (
        <div className="stepper-body">
            <div className="stepper-personal">
              <div className="stepper-personal-name">
                  <label htmlFor="person-name" className="stepper-person-name-label">Имя:</label>
                  <input type="text" placeholder="Ваше имя" name="person-name" className="person-name"/>
              </div>
              <div className="stepper-personal-сontacts">
                    <div className="person-phone-wrapper">
                        <label htmlFor="person-phone-number" className="person-phone-number-label">Номер телефона:</label>
                        <input type="text" placeholder="Введите стоимость" name="person-phone-number" className="person-phone-number"/>
                    </div>
                    <div className="person-email-wrapper">
                        <label htmlFor="person-email" className="person-email-label">Email:</label>
                        <input type="text" placeholder="Введите email" name="person-email" className="person-email"/>
                    </div>
              </div>
              <div className="person-message-wrapper">
                        <label htmlFor="person-message" className="person-message-label">Комментарий:</label>
                        <textarea name="person-message" id="" className="person-message" cols="66" rows="7" placeholder="Подробности о товаре, описание, количество"></textarea>
              </div>

              <div className="stepper-buttons">
                <a href="#" className="stepper__button-back" onClick={openPreviousTab}>
                     <span className="stepper__button-back-text">Назад</span>
                </a>
                <a href="#" className="stepper__button-ahead" onClick={openNextTab}>
                  <span className="stepper__button-ahead-text">Следующий шаг</span>
                  <span className="stepper__button-ahead-icon"></span>
                </a>
              </div>

            </div>
           
        </div>
      )
    },
    {
      id: 2,
      label: '3',
      content: (
        <div className="stepper-body">
           <div className="stepper-finish">
            <div className="stepper-finish_icon">
              <img src={checkmark} alt="" />
              </div>
            <div className="stepper-finish__title">Спасибо за заявку!</div>
            <div className="stepper-finish__subtitle">Мы обязательно свяжемся с Вами.</div>
            <div className="stepper-finish__caption">Также для Вас может быть полезно:</div>
            <ul className="stepper-finish__promo">
              <li className="stepper-finish__promo-item">Услуги</li>
              <li className="stepper-finish__promo-item">Примеры грузоперевозок</li>
              <li className="stepper-finish__promo-item">Поиск товаров в Китае</li>
            </ul>
           </div>
           
        </div>
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