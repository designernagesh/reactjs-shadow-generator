import React, {useState} from 'react';
import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';
import RangeSlider from 'react-bootstrap-range-slider';
import { Form, Row, Col } from 'react-bootstrap'
import './App.css';

function App() {
  const [ state, setState ] = useState({
    horizontalLength: 5,
    verticalLength: 5,
    blurRadius: 5,
    spreadRadius: 5,
    shadowColor: '#000',
    backgroundColor:'#CCC'
  }); 

  const changeHandler = (e) => {
    setState({
      ...state,
      [ e.target.name ]: e.target.value
    })
  }
  return (

    //{ horizontalLength, verticalLength, blurRadius, spreadRadius } = state

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
                    value={state.horizontalLength} name="horizontalLength"
                    onChange={changeHandler}
                  />        
                </Col>
                <Col xs="3">
                  <Form.Control value={state.horizontalLength}/>
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
                    value={state.verticalLength} name="verticalLength"
                    onChange={changeHandler}
                  />        
                </Col>
                <Col xs="3">
                  <Form.Control value={state.verticalLength}/>
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
                    value={state.blurRadius} name="blurRadius"
                    onChange={changeHandler}
                  />        
                </Col>
                <Col xs="3">
                  <Form.Control value={state.blurRadius}/>
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
                    value={state.spreadRadius} name="spreadRadius"
                    onChange={changeHandler}
                  />        
                </Col>
                <Col xs="3">
                  <Form.Control value={state.spreadRadius}/>
                </Col>
              </Form.Group>
            </div>

            <div className="col-sm-12">             
              <Form.Label>
                <strong>Shadow Color</strong>
              </Form.Label>
              <Form.Group as={Row}>              
                <Col xs="9">
                  <input type="color" name="shadowColor"  
                  value={state.shadowColor} onChange={changeHandler} />        
                </Col>
                <Col xs="3">
                  <Form.Control value={state.shadowColor}/>
                </Col>
              </Form.Group>
            </div>


            <div className="col-sm-12">             
              <Form.Label>
                <strong>Background Color</strong>
              </Form.Label>
              <Form.Group as={Row}>
                <Col xs="9">
                  <input type="color" name="backgroundColor"  
                  value={state.backgroundColor} onChange={changeHandler} />        
                </Col>
                <Col xs="3">
                  <Form.Control value={state.backgroundColor}/>
                </Col>
              </Form.Group>
  </div>


          </div>
        </div>

        <div className="col-sm-8 d-flex justify-content-center align-items-center">

            <div className="text-center" 
            style={{height: '100%', width: '100%', background:`${state.backgroundColor}`,
            boxShadow: `${state.horizontalLength}px ${state.verticalLength}px ${state.blurRadius}px ${state.spreadRadius}px ${state.shadowColor}` }}>
              <p>Horizontal Length: <strong>{state.horizontalLength}</strong></p>
              <p>Vertical Length: <strong>{state.verticalLength}</strong></p>
              <p>Blur Radius: <strong>{state.blurRadius}</strong></p>
              <p>Spread Radius: <strong>{state.spreadRadius}</strong></p>
              <p>Shadow Color: <strong>{state.shadowColor}</strong></p>
              <p>Background Color: <strong>{state.backgroundColor}</strong></p>
            </div>
        </div>
      </div>      
    </div>
  );
}

export default App;
