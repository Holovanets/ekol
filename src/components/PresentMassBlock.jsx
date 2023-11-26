import React from 'react'

export default function PresentMassBlock({ values }) {
  return (
    <div>
      <div className="bg-[#283046] p-4 rounded-lg my-4 flex gap-2 flex-col">
        <p>
          Дані про теплоту згорання залежно від виду палива обираємо у табл.
          3.3. Розраховуємо приведену масу парів за формулою :
        </p>
        <p className="text-red font-bold self-center">
          m<sub>приведена</sub> = (Q<sub>зг</sub>/Q<sub>0</sub>) ∙ m ∙ z
        </p>
      </div>
      <div className="bg-[#283046] p-4 rounded-lg my-4 flex gap-2 flex-col">
        <div className="flex flex-row justify-evenly flex-wrap gap-5">
          {values.map((item) => (
            <div key={item.id}>
              <div className="bg-green/25 rounded-lg p-4 w-[300px] h-[120px] flex flex-col justify-center ">
                <h1 className="font-bold">
                  Приведена маса парів для {item.name}
                </h1>
                <p>
                  Резервуар: m<sub>пр</sub> ={' '}
                  {Math.round(
                    (values[item.id].presentMassReservuar + Number.EPSILON) *
                      100
                  ) / 100}{' '}
                  кг
                </p>
                <p>
                  Цистерна: m<sub>пр</sub> ={' '}
                  {Math.round(
                    (values[item.id].presentMassCisterna + Number.EPSILON) * 100
                  ) / 100}{' '}
                  кг
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
