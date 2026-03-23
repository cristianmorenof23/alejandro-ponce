"use client"

import { setCookie } from "cookies-next"
import { useState } from "react"

// https://tailwindcomponents.com/component/radio-buttons-1

interface Props {
  currentInex?: number
  tabOpciones?: number[]
}

export const TabBar = ({ currentInex = 1, tabOpciones = [1, 2, 3, 4] }: Props) => {

  const [selected, setSelected] = useState(currentInex);

  const onTabSelected = (tab: number) => {
    setSelected(tab);
    setCookie('selectedTab', tab.toString())
  }

  return (
    <div className={`grid w-full  space-x-2 rounded-xl bg-gray-200 p-2 grid-cols-${tabOpciones.length} `}>

      {tabOpciones.map(tab => (
        <div key={tab}>
          <input checked={selected === tab} onChange={() => { }} type="radio" id={tab.toString()} className="peer hidden" />
          <label onClick={() => onTabSelected(tab)} className="block cursor-pointer select-none rounded-xl p-2 text-center peer-checked:bg-blue-500 peer-checked:font-bold peer-checked:text-white transition-all duration-200 ease-in-out">
            {tab}
          </label>
        </div>
      ))}



    </div>
  )
}