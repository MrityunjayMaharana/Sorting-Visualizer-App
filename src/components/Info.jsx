import React from 'react'
import AlgoInfo from './AlgoInfo'
import {COMPLEXITIES} from './Data.js'
import './Info.css'

function Info(props) {
    const algo = props.algo
    return (
        <>
            {
                algo === 'bubbleSort' ? 
                <AlgoInfo algo={algo} complexity={COMPLEXITIES.bubble} /> :
                algo === 'selectionSort' ? 
                <AlgoInfo algo={algo} complexity={COMPLEXITIES.selection} /> :
                algo === 'insertionSort' ? 
                <AlgoInfo algo={algo} complexity={COMPLEXITIES.insertion} /> :
                algo === 'mergeSort' ? 
                <AlgoInfo algo={algo} complexity={COMPLEXITIES.merge} /> :
                algo === 'quickSort' ? 
                <AlgoInfo algo={algo} complexity={COMPLEXITIES.quick} /> :
                <div>Error</div>
            }
        </>
    )
}

export default Info
