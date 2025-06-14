import Accordeon from './Accordeon.jsx';

function Faq () {
  return (
    <div className="faq">
        <div className="faq__title">часто задаваемые вопросы</div>
        <div className="faq__divider"></div>
        <div className="faq-body">
            <div className="faq-accordion">
            <Accordeon/>
            </div>
            <div className="faq-questionnaire">
              <div className="faq-questionnaire__title">Остались вопросы?</div>
              <div className="faq-questionnaire__subtitle">Оставьте заявку, и наш менеджер ответит Вам в ближайшее время</div>
              <form className="faq-questionnaire-body">
                <input type="text" name="firstname" className="firstname" placeholder="Имя *"/>
                <input type="text" name="phone" className="phone" placeholder="Телефон *"/>
                <input type="email" name="email" id="" className="email" placeholder="Email"/>
                <textarea name="message" id="" className="message" placeholder="Ваш вопрос"></textarea>
              </form>
            </div>
        </div>
    </div>
  )
}

export default Faq;