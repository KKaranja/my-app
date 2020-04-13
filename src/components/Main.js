import React from 'react';


const Main = () =>{
    return(
        <div>
            
            <div className="wrapper">
                <div className="form-wrapper">
                    <h1>Hello Wordld!</h1>
                    <form action="" onSubmit={this.handleSubmit} noValidate>
                        <div className="population">
                            <label htmlFor="pupulation" className="">pupulation</label>
                            <input type="text" className="" placeholder="pupulation"  name="pupulation" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}


export default Main;