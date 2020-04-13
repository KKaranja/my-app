import React from 'react';
import './Main.css';


const Main = () =>{
    return(
        <div>
            
            <div className="wrapper">
                <div className="form-wrapper">
                    <h1>Fill In Your Custom Data</h1>
                    <form action="" >
                        <div className="population">
                            <input type="text" className="" placeholder="Pupulation"  name="pupulation" />
                        </div>
                        <div className="time-to-elapse">
                            <input type="text" className="" placeholder="Time To Elapse" name="time to elapse" />
                        </div>
                        <div className="requested-cases">
                            <input type="text" className="" placeholder="Requested Cases" name="requested cases" />
                        </div>
                        <div className="total-hospital-beds">
                            <input type="text" className="" placeholder="Total Hospital Beds" name="Total beds" />
                        </div>
                        <div className="period-type">
                            <input type="text" className="" placeholder="Select Period Type" name="period type" />
                        </div>
                        
                    </form>
                </div>
            </div>
        </div>
    );
}


export default Main;