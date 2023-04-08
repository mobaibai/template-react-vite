import * as React from 'react'

export const useTitle = (title?: string) => {
  React.useEffect(() => {
    if (title === undefined || title === null)
      return
    document.title = title
  }, [])
}
