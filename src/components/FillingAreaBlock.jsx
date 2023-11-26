import React from 'react'

export default function FillingAreaBlock({
  valueReservuar,
  valueCisterna,
  fValue,
}) {
  return (
    <div>
      <div className="bg-[#283046] p-4 rounded-lg my-4 flex gap-2 flex-col">
        <p>Розраховуємо площу розливу F</p>
      </div>
      <div className="bg-[#283046] p-4 rounded-lg my-4 flex gap-2 flex-col">
        <div className="flex flex-row justify-evenly flex-wrap gap-5">
          <div className="bg-green/25 rounded-lg p-4 w-[400px] h-[100px] flex flex-col justify-center ">
            <p>
              Для резервуару: F = {valueReservuar} * 1000 * 0.15 = {fValue[0]} м
              <sup>2</sup>
            </p>
            <p>
              Для цистерни: F = {valueCisterna} * 1000 * 0.15 = {fValue[1]} м
              <sup>2</sup>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
