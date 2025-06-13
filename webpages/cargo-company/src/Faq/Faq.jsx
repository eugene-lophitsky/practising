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
            <div className="faq-questionnaire"></div>
        </div>
    </div>
  )
}

export default Faq;