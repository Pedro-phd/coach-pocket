import { PropsWithChildren } from 'react'

export default function ButtonGroup(props: PropsWithChildren) {
  return (
    <>
      <div className="isolate flex -space-x-px">{props.children}</div>
    </>
  )
}
