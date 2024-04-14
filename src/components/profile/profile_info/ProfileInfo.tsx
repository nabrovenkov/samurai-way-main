import { Fragment } from "react"
import style from './ProfileInfo.module.css'

export const ProfileInfo = () => {
  return (
    <Fragment>
      <div>
        <img
          src='https://image.winudf.com/v2/image/bWUud2FsbHBhcGEubmF0dXJlX3NjcmVlbl8xXzE1MzIzNzgxNThfMDE3/screen-1.jpg?fakeurl=1&type=.jpg'
          alt=''
        />
      </div>
      <div className={style.descriptionBlock}>ava + description</div>
    </Fragment>
  )
}