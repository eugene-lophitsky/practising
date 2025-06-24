import cooperation_img1 from '/cooperation_image1.webp';
import cooperation_img2 from '/cooperation_image2.webp';


function Cooperation () {
  return (
    <div className="cooperation cooperation--width">
        <div className="cooperation__wrapper">
            <div className="cooperation__title">готовы к сотрудничеству?</div>
            <div className="cooperation__subtitle">Зарегистрируйте груз!</div>
            <div className="cooperation__divider"></div>
            <div className="cooperation-body">
              <div className="cooperation-info">
                <div className="cooperation-info__text">
                  <span className="cooperation-info__text-paragraph">
                    Для того, чтобы начать сотрудничество, 
                    необходимо оформить груз указав информацию
                    о содержимом груза, его стоимость и количество.
                    А так-же прикрепив фотографии к заявке.
                  </span>
                  <p className="cooperation-info__text-paragraph">
                    Если требуется проверка товара на соответсвие 
                    количеству, то при оформлении груза на нашем 
                    сайте укажите это в графе &quot;Примечание&quot;. Данная
                    услуга платная и составляет 3 юаня за одну 
                    позицию в заказе. Любые дополнительные проверки
                    груза обсуждаются индивидуально в том числе и их стоимость.
                  </p>
                  <p className="cooperation-info__text-paragraph">
                    До отправки груза на наш склад в Китае обязательно
                    позаботьтесь о том, чтобы сделать маркировку, с 
                    номером Вашего заказа у нас на сайте, для каждой
                    внешней коробки, чтобы мы смогли определить именно
                    Ваш груз. Если у Вас нет возможности сделать это
                    самостоятельно, то попросите об этом своего поставщика.
                  </p>
                </div>
                <div className="cooperation-info__image">
                    <img src={cooperation_img1} alt="" className="cooperation-info__image-container" />
                </div>
              </div>
              <div className="cooperation-info">
                <div className="cooperation-info__image">
                    <img src={cooperation_img2} alt="" className="cooperation-info__image-container" />
                </div>
                <div className="cooperation-info__text cooperation-info__text--smaller">
                  <p className="cooperation-info__text-paragraph">
                    После отправки груза на наш склад в Китае, Вам 
                    обязательно нужно указать трек-номер для отслеживания
                    посылок по Китаю для каждой позиции в заказе. Внести
                    трек-номер можно на странице заказа. Трек-номер - это
                    ещё одна мера для идентификации Вашего груза на нашем складе.
                  </p>
                  <p className="cooperation-info__text-paragraph">
                    Если Вы оформили груз по нашей инструкции и сделали все 
                    правильно, то при получении Вашего груза на складе в Китае
                    статус заказа изменится на &quot;На складе&quot;.
                  </p>
                  <a href="#" className="cooperation-info__button">
                      <span className="cooperation-info__button-text">Оформить груз</span>
                      <span className="cooperation-info__button-icon"></span>
                  </a>
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Cooperation;