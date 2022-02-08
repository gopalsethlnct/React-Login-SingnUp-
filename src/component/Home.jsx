import React, { useEffect, useState } from "react";
import { HomePage } from "./HomePage";



import { User } from "./User";


export default function Home() {
    const [user, setUser] = useState([]);
    useEffect(() => {
        fetch('https://reqres.in/api/users?page=1')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setUser(data.data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }, [])
    let [showPage, setShowPage] = useState(true)

    function setlogin() {
        setShowPage(false)
    }
    return (
        <div>
            {
                showPage ? <HomePage setLogin={setlogin} /> : user.map((people) => {
                    return (
                        <User avatar={people.avatar} email={people.email} first_name={people.first_name} last_name={people.last_name} />
                    )
                })

            }
        </div>
    );
}