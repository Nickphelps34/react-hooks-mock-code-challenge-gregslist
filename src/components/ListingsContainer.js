import React from "react";
import ListingCard from "./ListingCard";
import {useEffect} from 'react'
import {useState} from "react"

function ListingsContainer() {
  const [postsListings, setPostsListings] = useState ([])

  console.log(postsListings)
  useEffect (() => {
    fetch('http://localhost:6001/listings')
      .then ((r) => r.json())
      .then((posts) => setPostsListings(posts))
        }, []);
  
  const listingInfo = postsListings.map(list => {
    return(
    <ListingCard description = {list.description} image = {list.image} location = {list.location}/>
  )})
  return (
    <main>
      <ul className="cards">
        {listingInfo}
      </ul>
    </main>
  );
}

export default ListingsContainer;
