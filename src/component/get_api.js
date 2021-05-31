import React, { useEffect, useState } from 'react';


const  Get_api= () => {
    const [data, setData] = useState([]);
    const getinformationdetails = async () => {
        try {
            const res = await fetch(' https://palitronicstest.herokuapp.com/getallexam')
            const actualData = await res.json();
            console.log(actualData);
            setData(actualData);
        } catch (err) {
            console.log(err);
        }

    }
    useEffect(() => {
       getinformationdetails();

    }, []);

    const list = data.map(e => 
        
        <ul>
                    <li>
                        <div >
                            <div>
                                <p>ID</p>
                                <p >{e.id}</p>

                            </div>

                        </div>

                    </li>
                    <li>
                        <div >
                            <div >
                                <p >LABEL</p>
                                <p >{e.label}</p>

                            </div>

                        </div>

                    </li>

                    <li >
                        <div>
                            <div >
                                <p>DURATION</p>
                                <p >{e.duration}</p>

                            </div>

                        </div>

                    </li>

                    <li >
                        <div >
                            <div >
                                <p >SUBJECT</p>
                                <p>{e.subject}</p>

                            </div>

                        </div>

                    </li>
                </ul>
    )



    return(
    <div>
        <>
            <section>
                <h1>INTERNSHIP TASK</h1>
                <h2>DISPLAYING THE GIVEN DATA</h2>
                
                {list}
                
            </section>
        </>

    </div>
)
}
export default Get_api;