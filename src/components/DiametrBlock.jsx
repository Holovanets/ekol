import React from 'react'

export default function DiametrBlock({ values }) {
  return (
    <div>
      <div className="bg-[#283046] p-4 rounded-lg my-4 flex gap-2 flex-col">
        <p>Розраховуємо ефективний діаметр «вогняної кулі» Ds за формулою</p>
        <p className="text-red font-bold self-center">
          D<sub>s</sub> = 5.33 * m<sup>0.327</sup>
        </p>
      </div>
      <div className="bg-[#283046] p-4 rounded-lg my-4 flex gap-2 flex-col">
        <div className="flex flex-row justify-evenly flex-wrap gap-5">
          {values.map((item) => (
            <div key={item.id}>
              <div className="bg-green/25 rounded-lg p-4 w-[300px] h-[120px] flex flex-col justify-center ">
                <h1 className="font-bold">Діаметр для {item.name}</h1>
                <p>
                  Резервуар: D<sub>s</sub> ={' '}
                  {Math.round(
                    (values[item.id].diametrReservuar + Number.EPSILON) * 1000
                  ) / 1000}{' '}
                  м
                </p>
                <p>
                  Цистерна: D<sub>s</sub> ={' '}
                  {Math.round(
                    (values[item.id].diametrCisterna + Number.EPSILON) * 1000
                  ) / 1000}{' '}
                  м
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
