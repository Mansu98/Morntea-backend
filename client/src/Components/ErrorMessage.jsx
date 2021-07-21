
import {Alert} from "react-bootstrap";
import React from 'react'

const ErrorMessage =({variant="info",
 children}) =>
 {
    return (
        <Alert variant={variant}
         style={{fontSize:20 , border: "3px solid red", backgroundColor:"red", color:"white", 
         textAlign:"center" , "marginBottom":"5px"}}>
             <strong>{children}</strong>
            </Alert>

    );
};

export default ErrorMessage;
