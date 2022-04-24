import { FC, CSSProperties, useState } from 'react'
import styles from './bind-styles-custom-property.module.css'

export const BindStyleCustomProperty: FC = () => {
  const [value, setValue] = useState('')

  console.log(value)

  return (
    <div className={styles.wrapper} style={{ '--background-color': value } as CSSProperties}>
      <input onChange={event => setValue(event.target.value)} type="color" value={value} />
    </div>
  )
}
