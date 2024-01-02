import React, { useState } from 'react'
import useSerialize from './useSerialize'

const useDymanicForm = (config) => {
    const [userResponse, setUserResponse] = useState({})

    const handleChange = e => {
        const { value, name, checked, type } = e.target
        if (type === "checkbox") {
            checked
                ? setUserResponse({
                    ...userResponse,
                    [name]: userResponse[name] ? [...userResponse[name], value] : [value]
                })
                : setUserResponse({
                    ...userResponse,
                    [name]: userResponse[name].filter(item => item !== value)
                })

        } else {
            setUserResponse({ ...userResponse, [name]: value })
        }


    }
    const handleForm = item => {
        switch (item.type) {
            case "text":
            case "color":
            case "date":
            case "time":
            case "email":
            case "number":
            case "password": return <input
                className='input input-bordered w-full my-2 '
                type={item.type}
                onChange={handleChange}
                name={item.fieldName}
                placeholder={`Please Enter ${item.fieldName}`}
            />
            case "select": return <select

                className='select select-bordered  w-full my-2'
                name={item.fieldName}

                onChange={handleChange}
            >
                <option value="">Choose {item.fieldName}</option>
                {item.options.map(o => <option value={o}>{o}</option>)}
            </select>
            case "checkbox":
            case "radio": return <div className=''>
                <h1 className='font-medium'>Choose {item.fieldName}</h1>
                {item.options.map(r => <div className=' flex items-center'>
                    <label className='label cursor-pointer' htmlFor={r}>
                        <input
                            className={"radio-primary mx-2 radio-xs"}
                            type={item.type}
                            value={r}
                            id={r}
                            onChange={handleChange}
                            name={item.fieldName} />
                        <span className='font-medium'>{r}</span>
                    </label>
                </div>)}
            </div>
            case "submit": return <input
                type="submit"
                className='btn btn-primary w-full my-6'
                onClick={item.onClick}
                value={item.fieldName} />

            default: return `Invalid ${item.type}`
        }
    }
    const serialize = useSerialize(userResponse)
    const UI = config && config.map(item => handleForm(item))
    return [UI, userResponse, serialize]
}

export default useDymanicForm