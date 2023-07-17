import React from 'react'
import {Button, minWidth, padding, textTransform, width} from '@pankod/refine-mui'
import { CustomButtonProps } from 'interfaces/common'

const CustomButton = ({type, title, backgroundColor, color, fullWidth, icon, handleClick, disabled} : CustomButtonProps) => {
  return (
    <Button disabled={disabled} type= {type === 'submit' ? 'submit' : 'button'} sx={{flex:fullWidth ? 1 : 'unset', padding: '10px 15px', width: fullWidth ? '100%': 'fitcontent', maxWidth:150, backgroundColor, color, fontSize:"16", fontweight: 600, gap:"10px", textTransform: 'capitalize', '&:hover':{opacity:0.9, backgroundColor}}} onClick={handleClick}>
        {icon}
        {title}
    </Button>
  )
}

export default CustomButton
