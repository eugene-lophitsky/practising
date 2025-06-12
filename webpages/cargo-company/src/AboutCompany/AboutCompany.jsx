import aboutCompany from '/about-company_img.webp';

function AboutCompany () {
  return (
    <div className="about-company">
        <div className="about-company__wrapper">
            <div className="about-company-info">
                <div className="about-company-info__title">о компании</div>
                <div className="about-company__divider"></div>
                <div className="about-company-info__text">
                    <div className="about-company-info__paragraph">
                    Компания Азия Карго - это полный комплекс
                    логистических услуг по доставке грузов из
                    Китая в Россию - сборные грузы и цельные
                    товарные партии, услуги посредника ТаоБао,
                    КАРГО Китай-Россия. Для вашего удобства 
                    есть тарифы на лёгкий и тяжелый куб. Мы 
                    работаем на рынке более 4 лет, а 
                    руководители компании занимаются логистикой 
                    уже более 11 лет.
                    </div>
                    <div className="about-company-info__paragraph">
                    Мы стремимся предоставить лучшие условия 
                    доставки и лучший сервис своим клиентам. 
                    Выбирая нас - вы выбираете качественную 
                    доставку оптимальную по цене и времени! 
                    Убедитесь в этом сами!
                    </div>
                </div>
            </div>
            <div className="about-company-image__wrapper">
                <img src={aboutCompany} className="about-company-image" alt="" />
                <div className="about-company-image__substrate"></div>
            </div>
        </div>
    </div>
  )
}

export default AboutCompany;