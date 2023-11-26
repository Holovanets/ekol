import React from 'react'

export default function LZRWBlock({ values }) {
  const toExp = (value) => {
    const temp = value
    return temp?.toExponential(3)
  }
  return (
    <div>
      <div className="bg-[#283046] p-4 rounded-lg my-4 flex gap-2 flex-col">
        <p>Розраховуємо інтенсивність випаровування W ЛЗР за формулою:</p>
        <p className="text-red font-bold self-center">
          W = 10<sup>-6</sup> * √M* P<sub>H</sub>
        </p>
      </div>
      <div className="bg-[#283046] p-4 rounded-lg my-4 flex gap-2 flex-col">
        <div className="self-center text-green">
          {values.map((item) => (
            <p key={item.id}>
              ρ<sub>{item.name}</sub> - {item.molarMass} <sup>г</sup>/
              <sub>моль</sub>
            </p>
          ))}
        </div>
        <div className="flex flex-row justify-evenly flex-wrap gap-5">
          {values.map((item) => (
            <div key={item.id}>
              <div className="bg-green/25 rounded-lg p-4 w-[250px] h-[120px] flex flex-col justify-center ">
                <p>
                  W<sub>{item.name}</sub> = 10<sup>-6</sup> * √{item.molarMass}{' '}
                  * {Math.round((item.PH + Number.EPSILON) * 10000) / 10000} ={' '}
                  {toExp(values[item.id].W)} кг/c*м<sup>2</sup>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
