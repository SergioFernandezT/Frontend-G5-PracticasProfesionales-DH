export function Avatar({className, ...props}) {
  return (
    <div className={`bg-gray-400 w-[40px] h-[40px] rounded-full ${className}`} {...props}>
      {props.children}
    </div>
  )
}

export function AvatarImage({src, alt, ...props}) {
  return (
    <img src={src} alt={alt} {...props}/>
  )
}
