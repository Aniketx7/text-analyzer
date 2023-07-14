
import React, { useState } from 'react'


export default function TextForm(props) {
    // state ko change karne ke liye we use destructuring concept of javascript
    // we can't change the value of variable directly like this: text = 'hello'
    const [text, setText] = useState('Enter text here')

    // setText('changed state')  //Correct way to change the state 
    const convertUpcase = () => {
        console.log('Button clicked')
        let newText = text.toUpperCase()
        setText(newText)

        props.showsAlert('success', 'Converted to upperCase')
    }


    const convertLowcase = () => {
        console.log('Button clicked')
        let newText = text.toLowerCase()
        setText(newText)

        props.showsAlert('success', 'Converted to lowerCase')

    }

    // we use handleEvent to handle on changee effect, jab bhi change kuch change hoga to ye function run karega Aur mujhe onchnage={handleChange} html target element me lagana padega
    const handleChange = (event) => {
        console.log('On change')
        setText(event.target.value)
    }

    const handleExtraSpace = () => {
        let extSpace = text.split(/[ ]+/)
        setText(extSpace.join(" "))

        props.showsAlert('success', 'Extra spaces removed')

    }


    const clearTxt = () => {
        setText("")

        props.showsAlert('success', 'Text cleared')

    }


    const copyText = () => {
        
    }


    // const [myStyle, setStyle] = useState({
    //     color: 'black',
    //     backgroundColor: 'white'
    // });

    // const [mode, setMode] = useState('Dark Mode')

    // let toggleStyle = () => {
    //     if (myStyle.color == 'black') {
    //         setStyle({
    //             color: 'white',
    //             backgroundColor: 'rgb(34, 34, 34)'
    //         });
    //         setMode('Light Mode')

    //     }



    //     else {
    //         setStyle({
    //             color: 'black',
    //             backgroundColor: 'white'
    //         })
    //         setMode('Dark Mode')

    //     }
    // }



    return (
        <>

            <div className="mb-3">
                <h3 htmlFor="Box" className="form-label my-4 mx-3 " id='form-lb' style={{ color: `${props.mode === 'light' ? 'black' : 'white'}` }}>{props.heading}</h3>

                <textarea className="form-control " value={text} onChange={handleChange} id="Box" rows="12"
                    style={{
                        color: `${props.mode === 'light' ? 'black' : 'white'} `,    //property color, vlaue props.mode jo app.js me hai 
                        backgroundColor: `${props.mode === 'light' ? 'white' : '#00000038'}`
                    }}></textarea>
            </div>
            <button className="btn btn-primary" onClick={convertUpcase}>Convert to UpCase</button>      {/*upcase button*/}
            <button className="btn btn-primary mx-3" onClick={convertLowcase}>Convert to UpCase</button>
            <button className="btn btn-primary me-3" onClick={clearTxt}>Clear</button>
            <button className="btn btn-primary me-3" onClick={handleExtraSpace}>Remove extra spaces</button>
            <button className="btn btn-primary me-3" onClick={copyText}>Remove extra spaces</button>

            <div className="mb4 my-3 " style={{ color: `${props.mode === 'light' ? 'black' : 'white'}` }} >
                <h4 >Text Analyze</h4>
                <p>{text.split(/[ ]+/).length} words, {text.length} characters</p>
            </div >

            <div className="mb-4" style={{ color: `${props.mode === 'light' ? 'black' : 'white'}` }}>
                <h4 className='previewTxt'>Preview Text</h4>
                <p>{text}</p>
            </div>
        </>
    );
}

