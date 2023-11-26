import React from 'react'

export default function KoefBlock({ values }) {
  return (
    <div>
      <div className="bg-[#283046] p-4 rounded-lg my-4 flex gap-2 flex-col">
        <p>
          Обчислюємо коефіцієнт пропускання теплового випромінювання крізь
          атмосферу ψ за формулою
        </p>
        <p className="text-red font-bold self-center">
          ψ = e
          <sup>
            -7 ∙ 10<sup>-4</sup>
          </sup>{' '}
          ∙ (sqrt(r<sup>2</sup> + H<sup>2</sup>) - D<sub>s</sub>/2)
        </p>
      </div>
      <div className="bg-[#283046] p-4 rounded-lg my-4 flex gap-2 flex-col">
        <div className="flex flex-row justify-evenly flex-wrap gap-5">
          {values.map((item) => (
            <div key={item.id}>
              <div className="bg-green/25 rounded-lg p-4 w-[300px] h-[120px] flex flex-col justify-center ">
                <h1 className="font-bold">Коефіцієнт ψ для {item.name}</h1>
                <p>
                  Резервуар: ψ ={' '}
                  {Math.round(
                    (values[item.id].koefReservuar + Number.EPSILON) * 1000
                  ) / 1000}{' '}
                  c
                </p>
                <p>
                  Цистерна: ψ ={' '}
                  {Math.round(
                    (values[item.id].koefCisterna + Number.EPSILON) * 1000
                  ) / 1000}{' '}
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
