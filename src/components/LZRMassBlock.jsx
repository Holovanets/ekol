import React from 'react'

export default function LZRMassBlock({ values }) {
  return (
    <div>
      <div className="bg-[#283046] p-4 rounded-lg my-4 flex gap-2 flex-col">
        <p>
          Масу ЛЗР, яка потрапила у навколишнє середовище, визначаємо за
          формулою:
        </p>
        <p className="text-red font-bold self-center">m = ρ ∙ V</p>
      </div>
      <div className="bg-[#283046] p-4 rounded-lg my-4 flex gap-2 flex-col">
        <div className="self-center text-green">
          {values.map((item) => (
            <p key={item.id}>
              ρ<sub>{item.name}</sub> - {item.density}кг/м<sup>3</sup>
            </p>
          ))}
        </div>
        <div className="flex flex-row justify-evenly flex-wrap gap-5">
          {values.map((item) => (
            <div key={item.id}>
              <div className="bg-green/25 rounded-lg p-4 w-[250px] h-[120px] flex flex-col justify-center ">
                <h1 className="font-bold">Маса для {item.name}</h1>
                <p>Резервуар: m = {values[item.id].massLZRReservuar} кг</p>
                <p>Цистерна: m = {values[item.id].massLZRCisterna} кг</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
