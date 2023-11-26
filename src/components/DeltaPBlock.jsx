import React from 'react'

export default function DeltaPBlock({ values }) {
  return (
    <div>
      <div className="bg-[#283046] p-4 rounded-lg my-4 flex gap-2 flex-col">
        <p>
          Розраховуємо величину надлишкового тиску <sub>дельта</sub>Р на
          відстані 30 м від геометричного центра газопароповітряної хмари за
          формулою
        </p>
        <p className="text-red font-bold self-center">
          <sub>дельта</sub>Р = P<sub>0</sub> ∙ ( (0.8 * m<sub>пр</sub>
          <sup>0.33</sup> / r) + (3 * m<sub>пр</sub>
          <sup>0.66</sup> / r<sup>2</sup>) + (5 * m<sub>пр</sub> / r{' '}
          <sup>3</sup>))
        </p>
      </div>
      <div className="bg-[#283046] p-4 rounded-lg my-4 flex gap-2 flex-col">
        <div className="flex flex-row justify-evenly flex-wrap gap-5">
          {values.map((item) => (
            <div key={item.id}>
              <div className="bg-green/25 rounded-lg p-4 w-[300px] h-[120px] flex flex-col justify-center ">
                <h1 className="font-bold">Надлишковий тиск для {item.name}</h1>
                <p>
                  Резервуар: <sub>дельта</sub>Р ={' '}
                  {Math.round(
                    (values[item.id].deltaPReservuar + Number.EPSILON) * 100
                  ) / 100}{' '}
                  кПа
                </p>
                <p>
                  Цистерна: <sub>дельта</sub>Р ={' '}
                  {Math.round(
                    (values[item.id].deltaPCisterna + Number.EPSILON) * 100
                  ) / 100}{' '}
                  кПа
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
