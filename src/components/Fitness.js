import React, { useEffect,useState} from 'react';

 const FitnessApp = () => {

  const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 450px)").matches
  )
  
  const [open, setOpen] = useState(false);
  const handleShowClick = () => {
  setOpen(true);
    };                        
  useEffect(() => {
    window
    .matchMedia("(min-width: 450px)")
    .addEventListener('change', e => setMatches( e.matches ));
  }, []);
  
  return(
  <div >
        
  {matches && (<h1 style={{textAlign:'center',width:'auto',fontSize:'medium',marginTop:'25%'}}>Please rotate your device, We do not support landscape mode, Please use the app in portrait mode for best experience</h1>)}
   
    
  {!matches && (
    <div onClick={handleShowClick}>
    <div className="index">
      <div className="div">
        <div className="overlap">
          <div className="text-wrapper">Calories</div>
          <div className="text-wrapper-2">1200 Kcal</div>
        </div>
        <div className="overlap-group">
          <div className="text-wrapper-3">Water</div>
          <div className="text-wrapper-4">1.8 Ltrs</div>
        </div>
        <div className="overlap-2">
          <div className="ellipse" />
          <div className="rectangle" />
          <div className="rectangle-2" />
          <div className="rectangle-3" />
          <div className="text-wrapper-5">Smart Watch</div>
          <div className="text-wrapper-6">Fire Boltt</div>
          <p className="p">Scan the device QR to connect</p>
          <img
            className="screenshot"
            alt="Screenshot"
            src="https://cdn.animaapp.com/projects/65c1b972daf79727eeec27ba/releases/65c1b9cc93b6d22305d43577/img/screenshot-2024-02-05-200304-photoroom-1.png"
          />
          <div className="rectangle-4" />
          <div className="text-wrapper-7">Scan</div>
        </div>
        <div className="flexcontainer">
          <p className="text">
            <span className="span">
              Your <br />
            </span>
        
      
            <span className="span">Fitness Tracker</span>
          </p>
        </div>
        <div className="div-wrapper">
          <div className="text-wrapper-8">Connected Devices</div>
        </div>
        <div className="overlap-group-2">
          <div className="overlap-3">
            <div className="text-wrapper-9">Save Details</div>
          </div>
          <div className="text-wrapper-10">Add Details</div>
          <div className="overlap-4">
            <div className="text-wrapper-11">Name</div>
          </div>
          <div className="overlap-5">
            <div className="text-wrapper-11">Age</div>
          </div>
          <div className="overlap-6">
            <p className="text-wrapper-12">Are you a gym member?</p>
            <img
              className="ion-arrow-back"
              alt="Ion arrow back"
              src="https://cdn.animaapp.com/projects/65c1b972daf79727eeec27ba/releases/65c1b9cc93b6d22305d43577/img/ion-arrow-back-outline-1.svg"
            />
          </div>
          <div className="overlap-7">
            <div className="text-wrapper-12">Do you eat meat?</div>
            <img
              className="ion-arrow-back"
              alt="Ion arrow back"
              src="https://cdn.animaapp.com/projects/65c1b972daf79727eeec27ba/releases/65c1b9cc93b6d22305d43577/img/ion-arrow-back-outline-1.svg"
            />
          </div>
          <div className="overlap-8">
            <div className="text-wrapper-12">Are you a cyclist?</div>
            <img
              className="ion-arrow-back"
              alt="Ion arrow back"
              src="https://cdn.animaapp.com/projects/65c1b972daf79727eeec27ba/releases/65c1b9cc93b6d22305d43577/img/ion-arrow-back-outline-1.svg"
            />
          </div>
          <div className="overlap-9">
            <div className="text-wrapper-11">Height</div>
          </div>
        </div>
        <div className="overlap-10">
          <div className="text-wrapper-13">Statistics</div>
        </div>
        <div className="ion-arrow-back-wrapper">
          <img
            className="img"
            alt="Ion arrow back"
            src="https://cdn.animaapp.com/projects/65c1b972daf79727eeec27ba/releases/65c1b9cc93b6d22305d43577/img/ion-arrow-back-outline.svg"
          />
        </div>
        <img
          className="rectangle-5"
          alt="Rectangle"
          src="https://cdn.animaapp.com/projects/65c1b972daf79727eeec27ba/releases/65c1b9cc93b6d22305d43577/img/rectangle-7@2x.png"
        />
        <div className="overlap-11">
          <img
            className="ellipse-2"
            alt="Ellipse"
            src="https://cdn.animaapp.com/projects/65c1b972daf79727eeec27ba/releases/65c1b9cc93b6d22305d43577/img/ellipse-1.svg"
          />
          <img
            className="ellipse-3"
            alt="Ellipse"
            src="https://cdn.animaapp.com/projects/65c1b972daf79727eeec27ba/releases/65c1b9cc93b6d22305d43577/img/ellipse-2.svg"
          />
          <div className="text-wrapper-14">Steps</div>
          <div className="text-wrapper-15">5,233</div>
        </div>
      </div>
    </div>
    </div>
   )}

   </div>
  );
  
};

export default FitnessApp;