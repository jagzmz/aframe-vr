import * as React from 'react'
import { render } from 'react-dom'

interface HomeProps {

}


import background_sky from '../../static_assets/pano-oldField.jpg'
export default function HomeEnvironment(props: HomeProps) {
    return (
        <div style={{ position: 'absolute', height: '100%', width: '100%' }}>
            <a-scene>
                <a-assets>
                    <img id="skyTexture"
                        src={background_sky} />
                </a-assets>
                <a-sky src="#skyTexture"></a-sky>
                <a-entity camera look-controls position="0 1.6 0"></a-entity>

            </a-scene>
        </div>
    )
}

