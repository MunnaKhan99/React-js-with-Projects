import React from 'react';

const AddContact = () => {

    
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className=" flex flex-col gap-y-4">
                <div className="text-center">
                    <h1 className="text-5xl font-bold">Add Contact</h1>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shadow-2xl">
                    <div className="card-body">
                        <fieldset className="fieldset">
                            <label className="label">Name</label>
                            <input type="text" className="input" placeholder="your name" />
                            <label className="label">Email</label>
                            <input type="email" className="input" placeholder="Email" />
                            <button className="btn btn-neutral mt-4">Add</button>
                        </fieldset>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddContact;