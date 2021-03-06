import React, {useState} from 'react';
import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';
import RangeSlider from 'react-bootstrap-range-slider';
import { Form, Row, Col } from 'react-bootstrap'
import './App.css';

function App() {

  const [ horizontalLength, setHorizontalLength ] = useState(5); 
  const [ verticalLength , setVerticalLength  ] = useState(5); 
  const [ blurRadius, setBlurRadius ] = useState(5); 
  const [ spreadRadius, setSpreadRadius ] = useState(5); 
  const [ shadowColor, setShadowColor ] = useState("#000000"); 
  const [ backgroundColor, setBackgroundColor ] = useState("#CCCCCC"); 

  return (
    <div className="container">
      <h2 className="display-4 text-center">Shadow Generator</h2>
      <br />

      <div className="row">
        <div className="col-sm-4">

          <div className="row">
            <div className="col-sm-12">         
              <Form.Label>
                <strong>Horizontal Length</strong>
              </Form.Label>
              <Form.Group as={Row}>              
                <Col xs="9">              
                  <RangeSlider
                    value={horizontalLength} name="horizontalLength"
                    onChange={e => setHorizontalLength(Number(e.target.value))}
                  />        
                </Col>
                <Col xs="3">
                  <Form.Control value={horizontalLength}/>
                </Col>
              </Form.Group>
            </div>


            <div className="col-sm-12">         
              <Form.Label>
                <strong>Vertical Length</strong>
              </Form.Label>
              <Form.Group as={Row}>              
                <Col xs="9">                
                  <RangeSlider
                    value={verticalLength}
                    onChange={e => setVerticalLength(Number(e.target.value))}
                  />        
                </Col>
                <Col xs="3">
                  <Form.Control value={verticalLength}/>
                </Col>
              </Form.Group>
            </div>


            <div className="col-sm-12">         
              <Form.Label>
                <strong>Blur Radius</strong>
              </Form.Label>
              <Form.Group as={Row}>              
                <Col xs="9">                
                  <RangeSlider
                    value={blurRadius}
                    onChange={e => setBlurRadius(Number(e.target.value))}
                  />        
                </Col>
                <Col xs="3">
                  <Form.Control value={blurRadius}/>
                </Col>
              </Form.Group>
            </div>

            <div className="col-sm-12">         
              <Form.Label>
                <strong>Spread Radius</strong>
              </Form.Label>
              <Form.Group as={Row}>              
                <Col xs="9">                
                  <RangeSlider
                    value={spreadRadius}
                    onChange={e => setSpreadRadius(Number(e.target.value))}
                  />        
                </Col>
                <Col xs="3">
                  <Form.Control value={spreadRadius}/>
                </Col>
              </Form.Group>
            </div>

            <div className="col-sm-12">             
              <Form.Label>
                <strong>Shadow Color</strong>
              </Form.Label>
              <Form.Group as={Row}>              
                <Col xs="9">
                  <input type="color" name="head"  
                  value={shadowColor} onChange={e => setShadowColor(e.target.value)} />        
                </Col>
                <Col xs="3">
                  <Form.Control value={shadowColor}/>
                </Col>
              </Form.Group>
            </div>


            <div className="col-sm-12">             
              <Form.Label>
                <strong>Background Color</strong>
              </Form.Label>
              <Form.Group as={Row}>
                <Col xs="9">
                  <input type="color" name="head"  
                  value={backgroundColor} onChange={ e => setBackgroundColor(e.target.value)} />        
                </Col>
                <Col xs="3">
                  <Form.Control value={backgroundColor}/>
                </Col>
              </Form.Group>
            </div>


          </div>
        </div>

        <div className="col-sm-8 d-flex justify-content-center align-items-center">

            <div className="text-center" 
            style={{height: '100%', width: '100%', background:`${backgroundColor}`,
            boxShadow: `${horizontalLength}px ${verticalLength}px ${blurRadius}px ${spreadRadius}px ${shadowColor}` }}>
              <p>Horizontal Length: <strong>{horizontalLength}</strong></p>
              <p>Vertical Length: <strong>{verticalLength}</strong></p>
              <p>Blur Radius: <strong>{blurRadius}</strong></p>
              <p>Spread Radius: <strong>{spreadRadius}</strong></p>
              <p>Shadow Color: <strong>{shadowColor}</strong></p>
              <p>Background Color: <strong>{backgroundColor}</strong></p>
            </div>
        </div>
      </div>      
    </div>
  );
}

export default App;
