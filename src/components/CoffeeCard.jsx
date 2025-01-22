import React from 'react'
import Swal from 'sweetalert2'
import { Link } from 'react-router'

export const CoffeeCard = ({coffee}) => {

    const {_id, name, chef, supplier, taste, category, details, photo } = coffee

    const handleDelete = _id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/coffee/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        // console.log(data);
                        if (data.deletedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                    }
                })
            }
          });
    }

  return (
    <div className="card card-side p-10 bg-[#F5F4F1] flex items-center justify-center">
  <figure>
    <img
      src={photo}
      alt="coffee" />
  </figure>
  <div className="card-body flex flex-col justify-center">
    <h2 className="card-title">Name: {name}</h2>
    <p>Chef: {chef} </p>
    <p>Category: {category} </p>
  </div>

  <div className="card-actions justify-end">
        <div className="join join-vertical">
        <button className="btn join-item border border-gray-200">View</button>
       <Link to={`updatecoffee/${_id}`}> <button className="btn join-item border border-gray-200">Edit</button></Link>
        <button
            onClick={()=>handleDelete(_id)}
            className="btn join-item border border-gray-200">Delete</button>
    </div>      
    </div>
</div>
  )
}
