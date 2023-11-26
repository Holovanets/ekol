import React from 'react'

export default function SteamMassBlock({ values }) {
  return (
    <div>
      <div className="bg-[#283046] p-4 rounded-lg my-4 flex gap-2 flex-col">
        <p>
          Розраховуємо масу парів mпарів ЛЗР, яка надійшла до атмосфери при
          випаровуванні з поверхні розливу за формулою:
        </p>
        <p className="text-red font-bold self-center">
          m<sub>парів</sub> = W ∙ F ∙ time
        </p>
      </div>
      <div className="bg-[#283046] p-4 rounded-lg my-4 flex gap-2 flex-col">
        <div className="flex flex-row justify-evenly flex-wrap gap-5">
          {values.map((item) => (
            <div key={item.id}>
              <div className="bg-green/25 rounded-lg p-4 w-[250px] h-[120px] flex flex-col justify-center ">
                <h1 className="font-bold">Маса парів для {item.name}</h1>
                <p>
                  Резервуар: m ={' '}
                  {Math.round(
                    (values[item.id].steamMassLZRReservuar + Number.EPSILON) *
                      100
                  ) / 100}{' '}
                  кг
                </p>
                <p>
                  Цистерна: m ={' '}
                  {Math.round(
                    (values[item.id].steamMassLZRCisterna + Number.EPSILON) *
                      100
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
