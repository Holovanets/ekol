import React from 'react'

export default function FQBlock({ values }) {
  return (
    <div>
      <div className="bg-[#283046] p-4 rounded-lg my-4 flex gap-2 flex-col">
        <p>
          Розраховуємо значення кутового коефіцієнта опромінення F<sub>q</sub>
        </p>
      </div>
      <div className="bg-[#283046] p-4 rounded-lg my-4 flex gap-2 flex-col">
        <div className="flex flex-row justify-evenly flex-wrap gap-5">
          {values.map((item) => (
            <div key={item.id}>
              <div className="bg-green/25 rounded-lg p-4 w-[300px] h-[120px] flex flex-col justify-center ">
                <h1 className="font-bold">
                  Кутовий F<sub>q</sub> для {item.name}
                </h1>
                <p>
                  Резервуар: F<sub>q</sub> ={' '}
                  {Math.round(
                    (values[item.id].FQReservuar + Number.EPSILON) * 1000000
                  ) / 1000000}{' '}
                </p>
                <p>
                  Цистерна: F<sub>q</sub> ={' '}
                  {Math.round(
                    (values[item.id].FQCisterna + Number.EPSILON) * 1000000
                  ) / 1000000}{' '}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
