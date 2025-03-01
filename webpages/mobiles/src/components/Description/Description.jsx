import React from "react";
import styled from "styled-components";

const MainInfo = styled.div`
`;

const MainInfoHeader = styled.div`
    font-size: 16px;
    font-weight: 700;
    line-height: 19px;
    margin: 30px 0 15px 0;
    @media (max-width: 725px) {
      font-size: 14px;
      line-height: 17px;
      margin: 20px 0 15px 0;
    }
`;

const MainInfoBriefly = styled.div`
    font-size: 16px;
    font-weight: 500;
    line-height: 19px;
    color: #000000;
    box-sizing: border-box;
    @media (max-width: 725px) {
      font-size: 14px;
      line-height: 17px;
    }
`;

const MainQuoteSpace = styled.p`
    margin: 0 0 15px 0;
`;

const MainInfoQuote = styled.span`
    font-style: italic;
`;

const MainInfoBody = styled.div`
    font-size: 16px;
    font-weight: 500;
    line-height: 19px;
    color: #000000;
    box-sizing: border-box;
p {
  margin: 0 0 15px 0;
};
p: last-of-type {
  margin-bottom: 0;
};
@media (max-width: 725px) {
  font-size: 14px;
  line-height: 17px;
  } 
}`;

const Paragraph = styled.p`
`;

const StringBreak = styled.br`
`;

export default function Description() {
  return (
  <>
    <MainInfo>
      <MainInfoHeader>Описание</MainInfoHeader>
      <MainInfoBriefly>
        <MainQuoteSpace>
          Наша самая совершенная система двух камер.
          <StringBreak/>
          Особый взгляд на прочность дисплея.
          <StringBreak/>
          Чип, с которым всё супербыстро.
          <StringBreak/>
          Аккумулятор держится заметно дольше.
          <StringBreak/>
          <MainInfoQuote>
            Iphone 13 - сильный мира всего.
          </MainInfoQuote>
        </MainQuoteSpace>
      </MainInfoBriefly>
      <MainInfoBody>
        <Paragraph>
          Мы разработали совершенно новую схему расположения и развернули
          объективы на 45 градусов. <StringBreak/>
          Благодаря этому внутри корпуса поместилась наша лучшая система двух
          камер с увеличенной матрицей широкоугольной камеры. Кроме того, мы
          освободили место для системы оптической стабилизации изображения
          сдвигом матрицы. И повысили скорость работы матрицы на
          сверхширокоугольной камере.
        </Paragraph>
        <Paragraph>
          Новая сверхширокоугольная камера видит больше деталей в тёмных
          областях снимков. Новая широкоугольная камера улавливает на 47% больше
          света для более качественных фотографий и видео. Новая оптическая
          стабилизация со сдвигом матрицы обеспечит чёткие кадры даже в
          неустойчивом положении.
        </Paragraph>
        <Paragraph>
          Режим «Киноэффект» автоматически добавляет великолепные эффекты
          перемещения фокуса и изменения резкости. Просто начните запись видео.
          Режим «Киноэффект» будет удерживать фокус на объекте съёмки, создавая
          красивый эффект размытия вокруг него. Режим «Киноэффект» распознаёт,
          когда нужно перевести фокус на другого человека или объект, который
          появился в кадре. Теперь ваши видео будут смотреться как настоящее
          кино.
        </Paragraph>
      </MainInfoBody>
    </MainInfo>
  </>
  );
}
