import React, { useState } from 'react';

const AddContact = (props) => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')

    const add = (e) => {
        e.preventDefault();
        if (name === "" || email === "") {
            alert("All Field are required mandetory");
            return;
        }
        props.addContactHandler({ name, email });

        setName("")
        setEmail("")
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className=" flex flex-col gap-y-4">
                <div className="text-center">
                    <h1 className="text-5xl font-bold">Add Contact</h1>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shadow-2xl">
                    <form className="card-body" onSubmit={add}>
                        <fieldset className="fieldset">
                            <label className="label">Name</label>
                            <input type="text" className="input" placeholder="your name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />

                            <label className="label">Email</label>
                            <input type="email" className="input" placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)} />
                            <button className="btn btn-neutral mt-4">Add</button>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddContact;