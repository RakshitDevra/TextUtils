import React,{useState} from 'react'

export default function About() {
  const [boxstyle,newStyle]=useState({
    //  width :100,
    margin:5,
    color:'black',
    backgroundColor :'white'
  })
  const [btntext ,newText]=useState('Enable dark mode')  //button text ko change karna hai isiliye as a state variable pass kiya 
   let changeMode= () =>{
    if(boxstyle.backgroundColor ==='white'){  //if else isiliye use kiya kyunki dobara se light mode bhi banana hai,nahi toh direct newStyle likh dete iss funtion ke andar.

    
    newStyle({
      margin:5,
      color: 'white',
      backgroundColor: 'black',
      border:'1 solid red'
    })
    newText('Enable light mode');
  }else{
    newStyle({
      color: 'black',
      backgroundColor: 'white'
    })
    newText('Enable Dark mode')

  }
   }

  let btnstyle={
    margin :10,
    color :'red',
    backgroundColor:'black'
  }
  
  return (
    <>
    <div className='container' style={boxstyle}>
<h1>About us</h1>

    <div className="accordion" id="accordionExample" style={boxstyle}>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={boxstyle}>
        Accordion Item #1
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={boxstyle}>
        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={boxstyle}>
        Accordion Item #2
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={boxstyle}>
        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={boxstyle}>
        Accordion Item #3
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={boxstyle}>
        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
</div>

</div>
<div className='container my-7'>
<button type="button" class="btn btn-dark" style={btnstyle} onClick={changeMode}>{btntext}</button>
</div>
</>
  )
}
