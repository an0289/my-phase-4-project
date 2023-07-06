import React, { useEffect, useState } from "react"; 
import { Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Login from "../pages/Login";
import ReviewedItemList from "../pages/ReviewedItemList";
import ItemList from "../pages/ItemList";
import NewReview from "../pages/NewReview";

function App() {
  const [user, setUser] = useState(null)

  useEffect(() =>{
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user))
      }
    })
  }, [])

  if (!user) return <Login onLogin={setUser} />

  return (
    // I think it would be best to have the new review function in the ItemList component so will likely delete that part and will need to add the set user to that part
   <>
    <NavBar user ={user} setUser={setUser} />
    <main>
      <Routes>
        <Route path="/new">
          <NewReview user={user} />
        </Route>
        <Route>
          <ReviewedItemList path="/my_reviewed_items" />
        </Route>
        <Route path="/">
          <ItemList />
        </Route>
      </Routes>
    </main>
   </>
  );
}

export default App;
