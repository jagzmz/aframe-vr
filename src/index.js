/* eslint-disable */
import * as React from 'react'
import { render } from 'react-dom'
import mainBg from './static_assets/pano-oldField.jpg'
import './css/styles.css'
import initializeComponents from './serviceWorker'
function App() {
    const [cursorPos, setCursorPos] = React.useState('0 0 -1')
    const [cameraRef, setCameraRef] = React.useState()
    const sceneRef = React.useRef();
    const cursorRef = React.useRef();
    const clickPositionRef = React.useRef();
    const [cursorXYZ, setCursorXYZ] = React.useState('0 0 0')
    initializeComponents(setCursorXYZ)
    // initializeComponents(setCursorPos)
    const [rot, setRot] = React.useState('0 0 0')
    let [iconRef, setIconRef] = React.useState()

    const addMarker = (cameraRef) => {
        console.log(document.getElementById('clickPosition').object3D.getWorldPosition())
        const testCur = document.getElementById('clickPosition').object3D.getWorldPosition()
        const rot = cameraRef.getAttribute('rotation')
        const pos = cameraRef.getAttribute('position')
        // console.log(rot)
        // console.log(iconRef.getAttribute('position'))
        // pos.z = -10
        if (!sceneRef.current) return;
        let img = document.createElement("a-image");
        // img.src = "https://img.icons8.com/dusk/64/000000/marker.png"
        // img.position = "0 0 -10"
        img.setAttribute('src', 'https://img.icons8.com/dusk/64/000000/marker.png')
        // console.log(`${ cursorXYZ.x % 20 } 0 -10`)
        img.setAttribute('position', `${ testCur.x } ${ testCur.y } ${ testCur.z }`)
        // img.setAttribute('position', `0 0 0`)
        img.setAttribute('scale', `10 10 0`)

        img.setAttribute('rotation', rot)

        sceneRef.current.appendChild(img);
        // console.log("scene ", sceneRef.current, img);

        // sceneRef.current.
    }


    // console.log(cursorXYZ)

    return (
        <div
            style={{
                position: 'absolute',
                height: '100%',
                width: '100%',
            }}
        >
            <a-scene
                ref={sceneRef}
            >
                <a-assets>
                    <img alt='mainBg' id='mainBg' src={mainBg} />
                </a-assets>

                <div className="controls" >
                    <div
                        className="arrowLeft"
                        onClick={e => arrowClick('left', rot, setRot, setCursorPos)}
                    />
                    <div
                        className="arrowRight"
                        onClick={e => arrowClick('right', rot, setRot, setCursorPos)}
                    />
                    <div onClick={e => addMarker(cameraRef)}>
                        <i className='addIcon material-icons'>add</i>
                    </div>
                </div>
                <a-entity
                    ref={(r) => {
                        setIconRef(r)
                    }}
                    id='rig cameraWrapper'
                    rotation={rot}
                    position='0 0 0'
                >
                    <a-camera
                        ref={(r) => { setCameraRef(r) }}
                    >
                        <a-entity ref={clickPositionRef} id="clickPosition" position="0 0 -100"></a-entity>

                        <a-cursor
                            cursor-listener
                            ref={cursorRef}
                            color='#fc5203'
                        />


                    </a-camera>
                </a-entity>
                <a-sky src='#mainBg' />
            </a-scene>
        </div>
    )
}



const arrowClick = (
    type,
    rot,
    setRot,
    setCursorPos
) => {
    let diff = 50
    // console.log("adasdasd")
    if (type === 'right') {
        diff *= -1
    }
    const xAxis = Number(rot.split(' ')[1]) + diff

    // console.log(xAxis - 50, xAxis)
    setRot(`0 ${ xAxis } 0`)
    setCursorPos(xAxis)
}
const cursorChange = (cursorPos) => {
    // console.log(cursorPos)
}
const styles = {
    addMarker: {},
}

const rootElement = document.getElementById('root')
render(<App />, rootElement)
