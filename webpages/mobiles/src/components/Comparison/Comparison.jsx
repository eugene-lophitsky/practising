import React from "react";
import "../Comparison/comparison.css";

export default function Comparison () {
    return (
               <div className="comparison">
                  <span className="comparison__caption">Сравнение моделей</span>
                  <table className="comparison__table">
                    <thead className="comparison__thead">
                      <tr>
                        <th>Модель</th>
                        <th>Вес</th>
                        <th>Высота</th>
                        <th>Ширина</th>
                        <th>Толщина</th>
                        <th>Чип</th>
                        <th>Объём памяти</th>
                        <th>Аккумулятор</th>
                      </tr>
                    </thead>
                    <tbody className="comparison__tbody">
                      <tr className="comparison__row">
                        <td>iPhone 11</td>
                        <td>194 грамма</td>
                        <td>150.9 мм</td>
                        <td>75.7 мм</td>
                        <td>8.3 мм</td>
                        <td>A13 Bionic chip</td>
                        <td>до 128 ГБ</td>
                        <td>до 17 часов</td>
                      </tr>
                      <tr className="comparison__row">
                        <td>iPhone 12</td>
                        <td>164 грамма</td>
                        <td>146.7 мм</td>
                        <td>71.5 мм</td>
                        <td>7.4 мм</td>
                        <td>A14 Bionic chip</td>
                        <td>до 256 ГБ</td>
                        <td>до 19 часов</td>
                      </tr>
                      <tr className="comparison__row">
                        <td>iPhone 13</td>
                        <td>174 грамма</td>
                        <td>146.7 мм</td>
                        <td>71.5 мм</td>
                        <td>7.65 мм</td>
                        <td>A15 Bionic chip</td>
                        <td>до 512 ГБ</td>
                        <td>до 19 часов</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
    )
}
