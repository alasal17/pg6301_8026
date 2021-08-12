import React from 'react';
import useLoading from "../../useLoading";


function ProfilePage({loadProfile }) {
    const {loading, error, data} = useLoading(async () => await loadProfile());

    if(loading){
        return <div>Loading... </div>
    }
    if(error){
        return (
        <div>
            <h1>An error occurred</h1>
            <div>{error.toString()}</div>
        </div>)
    }
    return (
        <div>
            <h1>
                Profile Page
            </h1>
            <div>{data.username}</div>
        </div>
    );
}

export default ProfilePage;
