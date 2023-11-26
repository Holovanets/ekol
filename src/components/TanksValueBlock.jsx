import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'

export default function TanksValueBlock({
  valueReservuar,
  valueCisterna,
  setValueReservuar,
  setValueCisterna,
}) {
  const [isSticky, setSticky] = useState(false)

  const handleScroll = () => {
    setSticky(window.scrollY > 140)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  return (
    <div>
      {isSticky && <div className="h-[204px]"></div>}
      <div
        className="bg-[#283046] p-4 rounded-lg my-4 flex gap-2 flex-col drop-shadow-lg w-full"
        style={
          isSticky
            ? {
                position: 'fixed',
                top: `0px`,
                zIndex: 2,
                marginRight: '56px',
                paddingRight: '56px',
              }
            : {}
        }
      >
        <h1 className="text-xl">Ємкості</h1>
        <div className="flex flex-col">
          <p>
            Ємність резервуару кг/м<sup>3</sup>
          </p>
          <input
            type="number"
            name="myInput"
            value={valueReservuar}
            onChange={(e) => setValueReservuar(e.target.value)}
            className="h-[40px] border-2 border-green rounded-md bg-transparent text-green px-3 font-bold "
            placeholder={valueReservuar}
          />
        </div>
        <div className="flex flex-col">
          <p>
            Ємність цистерни кг/м<sup>3</sup>
          </p>
          <input
            type="number"
            name="myInput"
            value={valueCisterna}
            onChange={(e) => setValueCisterna(e.target.value)}
            className="h-[40px] border-2 border-green rounded-md bg-transparent text-green px-3 font-bold "
            placeholder={valueCisterna}
          />
        </div>
      </div>
    </div>
  )
}
