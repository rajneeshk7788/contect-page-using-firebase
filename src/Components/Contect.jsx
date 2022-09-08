import React, { useState } from 'react'

const Contect = () => {
    const [user, setUser] = useState({
        name: "",
        email: "",
        phone: "",
        password: "",
        city: "",
    });
    let value, name;
    const getUserData = (e) => {
        name = e.target.name;
        value = e.target.value;

        setUser({ ...user, [name]: value })
    }
    console.log(value)

    const postData = async (e) => {
        e.preventDefault();

        const { name, email, phone, password, city } = user;
        // console.log("user:",user);

        const res =await fetch(
            "https://reactcontect-default-rtdb.firebaseio.com/test.json",
            {
                method: "POST",
                headers: {
                    "Content-Type": "aplication/json",
                },
                body: JSON.stringify({
                    name,
                    email,
                    phone,
                    password,
                    city,

                }),
            });
            const data=await res.json()
            console.log("data",data)
    }

    return (

        <div className='container'>
            <form className="row g-6 form_control" method='POST'>
                <div className="col-md-6">
                    <input
                        name='name'
                        type="name"
                        className="form-control my-4"
                        placeholder='Enter your Name'
                        autoComplete="of"
                        value={user.name}
                        onChange={getUserData}
                    />
                </div>
                <div className="col-md-6">
                    <input
                        name='email'
                        type="email"
                        className="form-control my-4"
                        placeholder='Enter your email'
                        autoComplete="of"
                        value={user.email}
                        onChange={getUserData} />
                </div>
                <div className="col-md-6">
                    <input
                        name='phone'
                        type="number"
                        className="form-control my-4"
                        placeholder='Enter your Phone Number'
                        autoComplete="of"
                        value={user.phone}
                        onChange={getUserData} />
                </div>
                <div className="col-md-6">
                    <input
                        name='password'
                        type="password"
                        className="form-control my-4"
                        placeholder='Enter your Password'
                        autoComplete="of"
                        value={user.password}
                        onChange={getUserData} />
                </div>
                <div className="col-md-6">
                    <input
                        name='city'
                        type="text"
                        className="form-control my-4"
                        placeholder='Enter your City'
                        autoComplete="of"
                        value={user.city}
                        onChange={getUserData} />
                </div>

                <div className="col-12">
                    <button type='submut' className="btn btn-primary" onClick={postData} >Sign in</button>
                </div>
            </form>

        </div >
    )
}

export default Contect