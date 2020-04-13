import React from 'react';
import './Main.css';
import dropdown from './Dropdown';


const Main = () =>{
    return(
        <div>
            
            <div className="wrapper">
                <div className="form-wrapper">
                    <h1>Fill In Your Custom Data</h1>
                    <form action="" >
                        <div className="population">
                            <label >Pupulation </label>
                            <input type="text" className="" placeholder="Pupulation"  name="pupulation" />
                        </div>
                        <div className="time-to-elapse">
                            <label >Time To Elapse</label>
                            <input type="text" className="" placeholder="Time To Elapse" name="time to elapse" />
                        </div>
                        <div className="requested-cases">
                            <label >Requested Cases</label>
                            <input type="text" className="" placeholder="Requested Cases" name="requested cases" />
                        </div>
                        <div className="total-hospital-beds">
                            <label >Total Hospital Beds</label>
                            <input type="text" className="" placeholder="Total Hospital Beds" name="Total beds" />
                        </div>
                        <button className="dropdown-btn">Dropdown
                                <i className="fa fa-caret-down"></i>
                        </button>
                        <div className="period-type">
                            <a href="#">Link 1</a>
                            <a href="#">Link 2</a>
                            <a href="#">Link 3</a>
                        </div>
                        
                    </form>
                </div>
            </div>
        </div>
    );
}


export default Main;