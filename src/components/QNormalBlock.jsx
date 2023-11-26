import React from 'react'

export default function QNormalBlock({ values }) {
  return (
    <div>
      <div className="bg-[#283046] p-4 rounded-lg my-4 flex gap-2 flex-col">
        <p>
          Розраховуємо дозу теплового випромінювання Q (на відстані 100 м від
          центра «вогняної кулі») за формулами
        </p>
        <p className="text-red font-bold self-center">
          Q = q ∙ t<sub>s</sub>
        </p>
        <p className="text-red font-bold self-center">
          q = E<sub>f</sub> ∙ F<sub>q</sub> ∙ ψ
        </p>
      </div>
      <div className="bg-[#283046] p-4 rounded-lg my-4 flex gap-2 flex-col">
        <div className="flex flex-row justify-evenly flex-wrap gap-5">
          {values.map((item) => (
            <div key={item.id}>
              <div className="bg-red/25 rounded-lg p-4 w-[300px] h-[120px] flex flex-col justify-center ">
                <h1 className="font-bold">Доза Q для {item.name}</h1>
                <p>
                  Резервуар: Q ={' '}
                  {Math.round(
                    (values[item.id].QReservuar + Number.EPSILON) * 1000
                  ) / 1000}{' '}
                </p>
                <p>
                  Цистерна: Q ={' '}
                  {Math.round(
                    (values[item.id].QCisterna + Number.EPSILON) * 1000
                  ) / 1000}{' '}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
