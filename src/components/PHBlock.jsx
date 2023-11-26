import React from 'react'

export default function PHBlock({ values }) {
  return (
    <div>
      <div className="bg-[#283046] p-4 rounded-lg my-4 flex gap-2 flex-col">
        <p>
          Розраховуємо тиск насиченої пари Р<sub>Н</sub> при розрахунковій
          температурі рідини за формулою :
        </p>
        <p className="text-red font-bold self-center">
          Р<sub>Н</sub> = 0.133 * 10<sup>A-(B/C+t)</sup>
        </p>
      </div>
      <div className="bg-[#283046] p-4 rounded-lg my-4 flex gap-2 flex-col">
        <div className="self-center text-green flex items-center flex-col gap-5">
          <h2>Константи рівняння Антуана</h2>
          <table className="mb-4">
            <thead>
              <tr>
                <th className="border-white/20 border p-2 bg-white/10">A</th>
                <th className="border-white/20 border p-2 bg-white/10">B</th>
                <th className="border-white/20 border p-2 bg-white/10">C</th>
              </tr>
            </thead>
            <tbody>
              {values.map((constants, index) => (
                <tr key={index}>
                  <td className="border-white/20 border p-2 ">
                    {constants.antuanA}
                  </td>
                  <td className="border-white/20 border p-2 ">
                    {constants.antuanB}
                  </td>
                  <td className="border-white/20 border p-2 ">
                    {constants.antuanC}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex flex-row justify-evenly flex-wrap gap-5">
          {values.map((item) => (
            <div key={item.id}>
              <div className="bg-green/25 rounded-lg p-4 w-[450px] h-[120px] flex flex-col justify-center ">
                <h1 className="font-bold">
                  Тиск насиченої пари для {item.name}
                </h1>
                <p>
                  Р<sub>Н</sub> = 0.133 * 10
                  <sup>
                    {values[item.id].antuanA}-({values[item.id].antuanB}/
                    {values[item.id].antuanC}+23)
                  </sup>{' '}
                  =<br /> ={' '}
                  <span className="text-red font-bold">
                    {values[item.id].PH} кПа
                  </span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
