// components/CircleProgress.tsx
'use client'

import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'

type Props = {
  porcentaje: number
  categoria: string
}

export default function CircleProgress({ porcentaje, categoria }: Props) {
  return (
    <div className="w-32 h-32 text-center">
      <CircularProgressbar
        value={porcentaje}
        text={`${porcentaje}%`}
        styles={buildStyles({
          textColor: '#000',
          pathColor: '#22c55e',
          trailColor: '#e5e7eb'
        })}
      />
      <p className="mt-2 text-sm font-semibold">{categoria}</p>
    </div>
  )
}
