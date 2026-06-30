import React, { useState } from "react";

const SenhaEsquecidaViewModel = () => {

        const [ values, setValues] = useState({
        
            userPhone:'',
        
        });

        const onChange = ( property: string, value: any) => { 
            setValues({ ...values, [property]: value })
        }

    const login = () => { 
        console.log(JSON.stringify(values))
    }
    return {
        ...values,
        onChange,
        login,
    }

}

export default SenhaEsquecidaViewModel