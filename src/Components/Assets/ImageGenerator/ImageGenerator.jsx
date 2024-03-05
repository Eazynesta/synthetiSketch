import React from 'react'
import './ImageGenerator.css'
import defaultImage from '../default_image.jpg';



const ImageGenerator = () => {
  return (
    <div className='ai-image-generator'>
        <div className='header'>
            Ai Image <span>Generator</span>
        </div>
        <div className="img-loading">
            <div className="image"><img src={defaultImage} alt="" /></div>
        </div>
        <div className='search-box'>
            <input type="text" className='search-input' placeholder='Describe What you want to see' />
            <div className="generate-btn">
                Generate
            </div>
        </div>
    </div>
  )
}

export default ImageGenerator
