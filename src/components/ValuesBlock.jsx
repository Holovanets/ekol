import React from 'react'

export default function ValuesBlock() {
  return (
    <div>
      <h1 className="text-xl">Вхідні дані:</h1>
      <div className="bg-[#283046] p-4 rounded-lg my-4 flex gap-2 flex-col">
        <h1 className="text-xl">Палива</h1>
        <div className="text-green">
          <p>Бензин А-72</p>
          <p>Бензин АИ-93</p>
          <p>Дизельне паливо</p>
        </div>
      </div>
    </div>
  )
}
