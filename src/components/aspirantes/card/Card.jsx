export function Card({className,...props}) {
  return (
    <div className={`rounded-lg border-e-2 shadow-sm ${className}`} {...props}>
      {props.children}
    </div>
  )
}

export function CardHeader({className,...props}) {
  return (
    <div className={`flex flex-col space-y-1.5 p-6 ${className}`}>
      {props.children}
    </div>
  )
}

export function CardContent({className,...props}) {
  return (
    <div className={`p-6 pt-0 ${className}`}>
      {props.children}
    </div>
  )
}


