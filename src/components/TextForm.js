import React, {useState} from 'react'

export default function TextForm() {
    const [text, setText] = useState();
    
    const handleUpClick = (event) => {
        if(text === '') {
            alert('Please enter the Text')
        } else {        
            let newText = text.toUpperCase();
            setText(newText);
        }
    }

    const handleLoClick = (event) => {
        if(text === '') {
            alert('Please enter the Text')
        } else {        
            let newText = text.toLowerCase();
            setText(newText);
        }
    }

    const handleOnChange = (event) => {
        setText(event.target.value)
    }

    const clearText = () => {
        setText('');
    } 

    return (
        <>
            <div className='container'>
                <div className="mb-3">
                    <h3>Enter the text to analyze</h3>
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="enter the text to analyze" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Uppercase</button>
                <button className="btn btn-secondary mx-2" onClick={clearText}>Clear</button>
            </div>
            <div className="container my-4">
                <h2>Your Word Summery</h2>
                {/* { console.log(text) } */}
                <p> {text !== undefined ? text.split(" ").length + " words " + text.length + " charaters"  : 0 + " words " + 0 + " charaters" }</p>
            </div>
        </>
    )
}
