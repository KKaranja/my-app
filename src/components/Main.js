import React from 'react';


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
                        <div className="population">
                            <input type="text" className="" placeholder="Time To Elapse" name="pupulation" />
                        </div>
                        <div className="population">
                            <input type="text" className="" placeholder="Requested Cases" name="pupulation" />
                        </div>
                        <div className="population">
                            <input type="text" className="" placeholder="Total Hospital Beds" name="pupulation" />
                        </div>
                        <div className="population">
                            <input type="text" className="" placeholder="Select Period Type" name="pupulation" />
                        </div>
                        
                    </form>
                </div>
            </div>
        </div>
    );
}


export default Main;