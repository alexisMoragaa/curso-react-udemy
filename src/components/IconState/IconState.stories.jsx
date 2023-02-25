import React from 'react'
import IconState from './IconState'


export default {
    title:"IconState",
    componenet: IconState
}

 export const  iconStateSunny = () => <IconState state={"sunny"}/>
 export const  iconStateFog = () => <IconState state={"fog"}/>
 export const  iconStateRain = () => <IconState state={"rain"}/>
 export const  iconStateCloudy = () => <IconState state={"cloudy"}/>