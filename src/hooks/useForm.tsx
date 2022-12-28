import React, { useState } from 'react'

const useForm = <T extends Object>( initState: T ) => {

    const [state, setState] = useState( initState );

    const onChange = <B extends Object>( value: B, field: keyof T ) => {
        setState({
            ...state,
            [field]: value
        });
    }

    return {
        ...state,
        form: state,
        onChange,
    }


}

export default useForm
