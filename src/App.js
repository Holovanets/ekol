import { useEffect, useState } from 'react'
import './App.css'
import ValuesBlock from './components/ValuesBlock'
import TanksValueBlock from './components/TanksValueBlock'
import LZRMassBlock from './components/LZRMassBlock'
import FillingAreaBlock from './components/FillingAreaBlock'
import PHBlock from './components/PHBlock'
import LZRWBlock from './components/LZRWBlock'
import SteamMassBlock from './components/SteamMassBlock'
import PresentMassBlock from './components/PresentMassBlock'
import DeltaPBlock from './components/DeltaPBlock'
import DiametrBlock from './components/DiametrBlock'
import TimeBlock from './components/TimeBlock'
import KoefBlock from './components/KoefBlock'
import FQBlock from './components/FQBlock'
import QNormalBlock from './components/QNormalBlock'

function App() {
  const [values, setValues] = useState([
    {
      id: 0,
      name: 'А-72',
      density: 725,
      molarMass: 97.2,
      antuanA: 4.12311,
      antuanB: 682.876,
      antuanC: 222.066,
      burnEnergy: 44239,
      massLZRReservuar: null,
      massLZRCisterna: null,
      steamMassLZRReservuar: null,
      steamMassLZRCisterna: null,
      PH: null,
      W: null,
      presentMassReservuar: null,
      presentMassCisterna: null,
      deltaPReservuar: null,
      deltaPCisterna: null,
      diametrReservuar: null,
      diametrCisterna: null,
      timeReservuar: null,
      timeCisterna: null,
      koefReservuar: null,
      koefCisterna: null,
      FQReservuar: null,
      FQCisterna: null,
      QReservuar: null,
      QCisterna: null,
      QExampleReservuar: null,
      QExampleCisterna: null,
    },
    {
      id: 1,
      name: 'АИ-93',
      density: 745,
      molarMass: 98.2,
      antuanA: 4.12311,
      antuanB: 664.976,
      antuanC: 221.695,
      burnEnergy: 43641,
      massLZRReservuar: null,
      massLZRCisterna: null,
      steamMassLZRReservuar: null,
      steamMassLZRCisterna: null,
      PH: null,
      W: null,
      presentMassReservuar: null,
      presentMassCisterna: null,
      deltaPReservuar: null,
      deltaPCisterna: null,
      diametrReservuar: null,
      diametrCisterna: null,
      timeReservuar: null,
      timeCisterna: null,
      koefReservuar: null,
      koefCisterna: null,
      FQReservuar: null,
      FQCisterna: null,
      QReservuar: null,
      QCisterna: null,
      QExampleReservuar: null,
      QExampleCisterna: null,
    },
    {
      id: 2,
      name: 'ДП',
      density: 862,
      molarMass: 204,
      antuanA: 5.00109,
      antuanB: 1314.04,
      antuanC: 192.473,
      burnEnergy: 43419,
      massLZRReservuar: null,
      massLZRCisterna: null,
      steamMassLZRReservuar: null,
      steamMassLZRCisterna: null,
      PH: null,
      W: null,
      presentMassReservuar: null,
      presentMassCisterna: null,
      deltaPReservuar: null,
      deltaPCisterna: null,
      diametrReservuar: null,
      diametrCisterna: null,
      timeReservuar: null,
      timeCisterna: null,
      koefReservuar: null,
      koefCisterna: null,
      FQReservuar: null,
      FQCisterna: null,
      QReservuar: null,
      QCisterna: null,
      QExampleReservuar: null,
      QExampleCisterna: null,
    },
    // {
    //   id: 3,
    //   name: 'АИ-92',
    //   density: 730,
    //   molarMass: 98.2,
    //   antuanA: 4.12311,
    //   antuanB: 664.976,
    //   antuanC: 221.695,
    //   burnEnergy: 43641,
    //   massLZRReservuar: null,
    //   massLZRCisterna: null,
    //   steamMassLZRReservuar: null,
    //   steamMassLZRCisterna: null,
    //   PH: null,
    //   W: null,
    //   presentMassReservuar: null,
    //   presentMassCisterna: null,
    //   deltaPReservuar: null,
    //   deltaPCisterna: null,
    //   diametrReservuar: null,
    //   diametrCisterna: null,
    //   timeReservuar: null,
    //   timeCisterna: null,
    //   koefReservuar: null,
    //   koefCisterna: null,
    //   FQReservuar: null,
    //   FQCisterna: null,

    //   QReservuar: null,
    //   QCisterna: null,
    //   QExampleReservuar: null,
    //   QExampleCisterna: null,
    // },
  ])
  const [valueReservuar, setValueReservuar] = useState(40)
  const [valueCisterna, setValueCisterna] = useState(15)
  const [fValue, setFValue] = useState([0, 0])
  useEffect(() => {
    setValues((prev) =>
      prev.map((item) => ({
        ...item,
        massLZRCisterna: item.density * valueCisterna,
        massLZRReservuar: item.density * valueReservuar,
      }))
    )
    setFValue0()
    setFValue1()
    setPH()
    setW()
    setSteamMassReservuar()
    setSteamMassCisterna()
    setPresentMassReservuar()
    setPresentMassCisterna()
    setDeltaReservuar()
    setDeltaCisterna()
    setDiametrReservuar()
    setDiametrCisterna()
    setTimeReservuar()
    setTimeCisterna()
    setKoefReservuar()
    setKoefCisterna()
    setFQReservuar()
    setFQCisterna()
    setQReservuar()
    setQCisterna()
    setQExampleReservuar()
    setQExampleCisterna()
  }, [])
  const setLZRReservuar = () => {
    setValues((prev) =>
      prev.map((item) => ({
        ...item,
        massLZRReservuar: item.density * valueReservuar,
      }))
    )
  }
  const setLZRCisterna = () => {
    setValues((prev) =>
      prev.map((item) => ({
        ...item,
        massLZRCisterna: item.density * valueCisterna,
      }))
    )
  }
  const setFValue0 = () => {
    const temp = valueReservuar * 1000 * 0.15
    setFValue((prev) => [temp, prev[1]])
  }
  const setFValue1 = () => {
    const temp = valueCisterna * 1000 * 0.15
    setFValue((prev) => [prev[0], temp])
  }
  const setPH = () => {
    setValues((prev) =>
      prev.map((item) => ({
        ...item,
        PH:
          0.1333 *
          Math.pow(10, item.antuanA - item.antuanB / (item.antuanC + 23)),
      }))
    )
  }
  const setW = () => {
    setValues((prev) =>
      prev.map((item) => ({
        ...item,
        W: Math.pow(10, -6) * Math.sqrt(item.molarMass) * item.PH,
      }))
    )
  }
  const setSteamMassReservuar = () => {
    setValues((prev) =>
      prev.map((item) => ({
        ...item,
        steamMassLZRReservuar: item.W * fValue[0] * 3600,
      }))
    )
  }
  const setSteamMassCisterna = () => {
    setValues((prev) =>
      prev.map((item) => ({
        ...item,
        steamMassLZRCisterna: item.W * fValue[1] * 3600,
      }))
    )
  }
  const setPresentMassReservuar = () => {
    setValues((prev) =>
      prev.map((item) => ({
        ...item,
        presentMassReservuar:
          (item.burnEnergy / 4520) * item.steamMassLZRReservuar * 0.1,
      }))
    )
  }
  const setPresentMassCisterna = () => {
    setValues((prev) =>
      prev.map((item) => ({
        ...item,
        presentMassCisterna:
          (item.burnEnergy / 4520) * item.steamMassLZRCisterna * 0.1,
      }))
    )
  }
  const setDeltaReservuar = () => {
    setValues((prev) =>
      prev.map((item) => ({
        ...item,
        deltaPReservuar:
          101 *
          ((0.8 * Math.pow(item.presentMassReservuar, 0.33)) / 30 +
            (3 * Math.pow(item.presentMassReservuar, 0.66)) / Math.pow(30, 2) +
            (5 * item.presentMassReservuar) / Math.pow(30, 3)),
      }))
    )
  }
  const setDeltaCisterna = () => {
    setValues((prev) =>
      prev.map((item) => ({
        ...item,
        deltaPCisterna:
          101 *
          ((0.8 * Math.pow(item.presentMassCisterna, 0.33)) / 30 +
            (3 * Math.pow(item.presentMassCisterna, 0.66)) / Math.pow(30, 2) +
            (5 * item.presentMassCisterna) / Math.pow(30, 3)),
      }))
    )
  }
  const setDiametrReservuar = () => {
    setValues((prev) =>
      prev.map((item) => ({
        ...item,
        diametrReservuar: 5.33 * Math.pow(item.steamMassLZRReservuar, 0.327),
      }))
    )
  }
  const setDiametrCisterna = () => {
    setValues((prev) =>
      prev.map((item) => ({
        ...item,
        diametrCisterna: 5.33 * Math.pow(item.steamMassLZRCisterna, 0.327),
      }))
    )
  }
  const setTimeReservuar = () => {
    setValues((prev) =>
      prev.map((item) => ({
        ...item,
        timeReservuar: 0.92 * Math.pow(item.steamMassLZRReservuar, 0.303),
      }))
    )
  }
  const setTimeCisterna = () => {
    setValues((prev) =>
      prev.map((item) => ({
        ...item,
        timeCisterna: 0.92 * Math.pow(item.steamMassLZRCisterna, 0.303),
      }))
    )
  }
  const setKoefReservuar = () => {
    setValues((prev) =>
      prev.map((item) => ({
        ...item,
        koefReservuar: Math.pow(
          Math.E,
          -7 *
            Math.pow(10, -4) *
            (Math.sqrt(
              Math.pow(100, 2) + Math.pow(item.diametrReservuar / 2, 2)
            ) -
              item.diametrReservuar / 2)
        ),
      }))
    )
  }
  const setKoefCisterna = () => {
    setValues((prev) =>
      prev.map((item) => ({
        ...item,
        koefCisterna: Math.pow(
          Math.E,
          -7 *
            Math.pow(10, -4) *
            (Math.sqrt(
              Math.pow(100, 2) + Math.pow(item.diametrCisterna / 2, 2)
            ) -
              item.diametrCisterna / 2)
        ),
      }))
    )
  }
  const calculateFQ = (Ds) => {
    let H = Ds / 2
    let numerator = H / Ds + 0.5
    let brackets = Math.pow(H / Ds + 0.5, 2) + Math.pow(100 / Ds, 2)
    let denominator = 4 * Math.pow(brackets, 1.5)
    let Fq = numerator / denominator
    return Fq
  }
  const setFQReservuar = () => {
    setValues((prev) =>
      prev.map((item) => ({
        ...item,
        FQReservuar: calculateFQ(item.diametrReservuar),
      }))
    )
  }
  const setFQCisterna = () => {
    setValues((prev) =>
      prev.map((item) => ({
        ...item,
        FQCisterna: calculateFQ(item.diametrCisterna),
      }))
    )
  }
  const calculateFg = (B, S, A) => {
    let part1 = (B - 1 / S) / Math.sqrt(Math.pow(B, 2) - 1)

    let part3 = (B + 1) * (S - 1)
    let part4 = (B - 1) * (S + 1)
    let part5 = Math.atan(Math.sqrt(part3 / part4))
    let part2 = part1 * part5

    let part6 = (A - 1 / S) / Math.sqrt(Math.pow(A, 2) - 1)
    let part7 = (A + 1) * (S - 1)
    let part8 = (A - 1) * (S + 1)
    let part9 = Math.atan(Math.sqrt(part7 / part8))

    let Fg = (1 / Math.PI) * (part2 - part6 * part9)

    return Fg
  }
  const calculateFb = (S, h, A) => {
    // Часть 1: (1 / S)
    let part1 = 1 / S

    // Часть 2: arctan(h / sqrt(S^2 - 1))
    let part2 = Math.atan(h / Math.sqrt(Math.pow(S, 2) - 1))

    // Часть 3: (h / S)
    let part3 = h / S

    // Часть 4: arctan((S - 1) / (S + 1))
    let part4 = Math.atan(Math.sqrt((S - 1) / (S + 1)))

    // Часть 5: (A / sqrt(A^2 - 1))
    let part5 = A / Math.sqrt(Math.pow(A, 2) - 1)

    // Часть 6: arctan(((A + 1) * (S - 1)) / ((A - 1) * (S + 1)))
    let part6 = Math.atan(Math.sqrt(((A + 1) * (S - 1)) / ((A - 1) * (S + 1))))

    // Объединяем части для вычисления Fb
    let Fb = (1 / Math.PI) * (part1 * part2 - part3 * (part4 - part5 * part6))

    return Fb
  }
  const calculateQ = (Ds, koef, ts, F) => {
    let Mv = 0.04
    let r = 100
    let Ef = 18
    let d = Math.sqrt((4 * F) / Math.PI)
    let H = 42 * d * (Math.pow(Mv / (1.163 * Math.sqrt(9.81 * d))), 0.61)
    let h = (2 * H) / d
    let S = (2 * r) / d
    let A = (Math.pow(h, 2) + Math.pow(S, 2) + 1) / (2 * S)
    let B = (1 + Math.pow(S, 2)) / (2 * S)
    let Fb = calculateFb(S, h, A)
    let Fg = calculateFg(B, S, A)
    let Fq = Math.sqrt(Math.pow(Fb, 2) + Math.pow(Fg, 2))
    let q = Fq * koef * Ef
    let Q = q * ts
    console.log(ts)
    return Q
  }
  const setQReservuar = () => {
    setValues((prev) =>
      prev.map((item) => ({
        ...item,
        QReservuar: calculateQ(
          item.diametrReservuar,
          item.koefReservuar,
          item.timeReservuar,
          fValue[0]
        ),
      }))
    )
  }
  const setQCisterna = () => {
    setValues((prev) =>
      prev.map((item) => ({
        ...item,
        QCisterna: calculateQ(
          item.diametrCisterna,
          item.koefCisterna,
          item.timeCisterna,
          fValue[1]
        ),
      }))
    )
  }
  const setQExampleReservuar = () => {
    setValues((prev) =>
      prev.map((item) => ({
        ...item,
        QExampleReservuar:
          450 * item.timeReservuar * item.FQReservuar * item.koefReservuar,
      }))
    )
  }
  const setQExampleCisterna = () => {
    setValues((prev) =>
      prev.map((item) => ({
        ...item,
        QExampleCisterna:
          450 * item.timeCisterna * item.FQCisterna * item.koefCisterna,
      }))
    )
  }
  useEffect(() => {
    setLZRReservuar()
    setFValue0()
    setSteamMassReservuar()
    setPresentMassReservuar()
    setDeltaReservuar()
    setDiametrReservuar()
    setTimeReservuar()
    setKoefReservuar()
    setFQReservuar()
    setQReservuar()
    setQExampleReservuar()
  }, [valueReservuar, values])
  useEffect(() => {
    setLZRCisterna()
    setFValue1()
    setSteamMassCisterna()
    setPresentMassCisterna()
    setDeltaCisterna()
    setDiametrCisterna()
    setTimeCisterna()
    setKoefCisterna()
    setFQCisterna()
    setQCisterna()
    setQExampleCisterna()
  }, [valueCisterna, values])

  return (
    <div className="bg-[#161E31] min-h-[1080px] text-white p-5">
      <ValuesBlock />
      <TanksValueBlock
        {...{
          valueReservuar,
          valueCisterna,
          setValueReservuar,
          setValueCisterna,
        }}
      />

      <h1 className="text-xl">
        4.5.1 Визначення кількості горючих газів, які потрапили у атмосферу
      </h1>
      <LZRMassBlock {...{ values }} />
      <FillingAreaBlock {...{ valueCisterna, valueReservuar, fValue }} />
      <PHBlock {...{ values }} />
      <LZRWBlock {...{ values }} />
      <SteamMassBlock {...{ values }} />
      <h1 className="text-xl">
        4.5.2 Розрахунок надлишкового тиску у фронті ударної хвилі
      </h1>
      <PresentMassBlock {...{ values }} />
      <DeltaPBlock {...{ values }} />
      <h1 className="text-xl">
        4.5.3 Розрахунок дози теплового випромінювання «вогняної кулі»
      </h1>
      <DiametrBlock {...{ values }} />
      <TimeBlock {...{ values }} />
      <KoefBlock {...{ values }} />
      <FQBlock {...{ values }} />
      <QNormalBlock {...{ values }} />
      <div className="bg-[#283046] p-4 rounded-lg my-4 flex gap-2 flex-col">
        <p>
          Розраховуємо дозу теплового випромінювання Q (на відстані 100 м від
          центра «вогняної кулі») за формулами з прикладу
        </p>
      </div>
      <div className="bg-[#283046] p-4 rounded-lg my-4 flex gap-2 flex-col">
        <div className="flex flex-row justify-evenly flex-wrap gap-5">
          {values.map((item) => (
            <div key={item.id}>
              <div className="bg-green/25 rounded-lg p-4 w-[300px] h-[120px] flex flex-col justify-center ">
                <h1 className="font-bold">Доза Q для {item.name}</h1>
                <p>
                  Резервуар: Q ={' '}
                  {Math.round(
                    (values[item.id].QExampleReservuar + Number.EPSILON) * 1000
                  ) / 1000}{' '}
                </p>
                <p>
                  Цистерна: Q ={' '}
                  {Math.round(
                    (values[item.id].QExampleCisterna + Number.EPSILON) * 1000
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

export default App
