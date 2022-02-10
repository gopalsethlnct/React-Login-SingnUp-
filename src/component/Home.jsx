import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userDataInitiate, userDataSuccess } from "../reduxUser/users/action";
import { HomePage } from "./HomePage";
import { User } from "./User";

export default function Home() {
  //const [user, setUser] = useState([]);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  
  useEffect(() => {
    (() => {
      dispatch(userDataInitiate());
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => res.json())
        .then((res) => dispatch(userDataSuccess(res)));
      // .catch(err) => userDataFailure(err))
    })();
  }, []);
  let [showPage, setShowPage] = useState(true);

  function setlogin() {
    setShowPage(false);
  }
  // console.log(user);
  return (
    <div>
      {showPage ? (
        <HomePage setLogin={setlogin} />
      ) : (
        user.userData.map((people) => {
          return (
            <User
              name={people.name}
              email={people.email}
              address={people.address}
              phone={people.phone}
              company={people.company}
              website={people.website}
            />
          );
        })
      )}
    </div>
  );
}
//     "id": 1,
//     "name": "Leanne Graham",
//     "username": "Bret",
//     "email": "Sincere@april.biz",
//     "address": {
//       "street": "Kulas Light",
//       "suite": "Apt. 556",
//       "city": "Gwenborough",
//       "zipcode": "92998-3874",
//       "geo": {
//         "lat": "-37.3159",
//         "lng": "81.1496"
//       }
//     },
//     "phone": "1-770-736-8031 x56442",
//     "website": "hildegard.org",
//     "company": {
//       "name": "Romaguera-Crona",
//       "catchPhrase": "Multi-layered client-server neural-net",
//       "bs": "harness real-time e-markets"
//     }
//   },
