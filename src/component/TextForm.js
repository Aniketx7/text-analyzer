
import React, { useState } from 'react'


export default function TextForm(props) {
    
    // state ko change karne ke liye we use destructuring concept of javascript
    // we can't change the value of variable directly like this: text = 'hello'
    const [text, setText] = useState('')
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
        navigator.clipboard.writeText(text)
        props.showsAlert('success', 'Copied to clipboard')
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

                <textarea className="form-control " placeholder='Enter Your Text Here>' value={text} onChange={handleChange} id="Box" rows="12"
                    style={{
                        color: `${props.mode === 'light' ? 'black' : 'white'} `,    //property color, vlaue props.mode jo app.js me hai 
                        backgroundColor: `${props.mode === 'light' ? 'white' : '#00000038'}`
                    }}></textarea>
            </div>
            <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={convertUpcase}>Convert to UpCase</button>      {/*upcase button*/}
            <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={convertLowcase}>Convert to UpCase</button>
            <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={clearTxt}>Clear</button>
            <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpace}>Remove extra spaces</button>
            <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={copyText}>Copy text</button>

            <div className="mb4 my-3 " style={{ color: `${props.mode === 'light' ? 'black' : 'white'}` }} >
                <h4 >Text Analyze</h4>
                {/* text ko " " me split kar raha hai fir agar element ka length 0 nahi to naye arraye me element aa jayega jo ki text hai  */}
                <p>{text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} words, {text.length} characters</p>
            </div >

            <div className="mb-4" style={{ color: `${props.mode === 'light' ? 'black' : 'white'}` }}>
                <h4 className='previewTxt'>Preview Text</h4>
                <p>{text}</p>
            </div>
        </>
    );
}

