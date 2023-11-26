import React from 'react'

export default function TimeBlock({ values }) {
  return (
    <div>
      <div className="bg-[#283046] p-4 rounded-lg my-4 flex gap-2 flex-col">
        <p>Розраховуємо час існування «вогняної кулі» ts за формулою</p>
        <p className="text-red font-bold self-center">
          t<sub>s</sub> = 0.92 * m<sup>0.303</sup>
        </p>
      </div>
      <div className="bg-[#283046] p-4 rounded-lg my-4 flex gap-2 flex-col">
        <div className="flex flex-row justify-evenly flex-wrap gap-5">
          {values.map((item) => (
            <div key={item.id}>
              <div className="bg-green/25 rounded-lg p-4 w-[300px] h-[120px] flex flex-col justify-center ">
                <h1 className="font-bold">
                  Час існування кулі для {item.name}
                </h1>
                <p>
                  Резервуар: t<sub>s</sub> ={' '}
                  {Math.round(
                    (values[item.id].timeReservuar + Number.EPSILON) * 100
                  ) / 100}{' '}
                  c
                </p>
                <p>
                  Цистерна: t<sub>s</sub> ={' '}
                  {Math.round(
                    (values[item.id].timeCisterna + Number.EPSILON) * 100
                  ) / 100}{' '}
                  c
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
