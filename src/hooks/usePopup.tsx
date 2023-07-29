import { useState } from "react"
import ReactDOM from "react-dom"
import { rootDiv } from "../main"
import { Popup, PopupType } from "@/components/Popup"

export const usePopup = (options: PopupType) => {
  const { isOpen = false, title, maskClosable, width, className, style, children } = options
  const [open, setOpen] = useState(isOpen)
  const popup = ReactDOM.createPortal(<Popup isOpen={open} title={title} maskClosable={maskClosable} width={width} className={className} style={style} onCancel={() => setOpen(false)} >
    {children}
  </Popup>,
    rootDiv
  )
  return {
    popup,
    show() {
      setOpen(true)
    },
    hide() {
      setOpen(false)
    },
    toggle() {
      setOpen(!open)
    },
  }
}
