import React from 'react'
import * as iconComponents from './icons'
type IconKey = keyof typeof iconComponents

export interface IconProps {
  size?: number
  name: IconKey
  fill?: string
  className?: string
  style?: React.CSSProperties
  onClick?: (e?:any) => void;
}

const IconComponent: React.FC<IconProps> = (props) => {
  const { name, size = 20,className = '', ...rest } = props
  const IconStory = iconComponents[name]
  
  return <IconStory size={size} className={`${className} cursor-pointer`} {...rest} />
}

export const Icon = React.memo(IconComponent)
