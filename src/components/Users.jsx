import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const Users = () => {
    const loadedUsers = useLoaderData();
    const [users,setUsers] = useState(loadedUsers);
    const handleDelete=(id)=>{
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
                fetch(`http://localhost:5000/users/${id}`,{
                    method: 'DELETE'
                })
                .then(res=>res.json())
                .then(data=>{
                    console.log(data)
                      Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });
              const remaining = users.filter(user=>user._id!==id)
              setUsers(remaining)
                })
            
            }
          });
    }
    
    return (
        <div>
            <h2 className="text-xl text-center font-bold py-10">Users Collections</h2>
           <div>
           <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Email</th>
        <th>Created At</th>
        <th>LastSignedIn At</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
     {
        users.map(user=><tr key={user._id}>
            <td></td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.createdAt}</td>
            <td>{user.lastSignInTime}</td>
            <td className="">
                <button className="btn text-white bg-green-500 mr-2">Edit</button>
                <button onClick={()=>handleDelete(user._id)} className="btn text-white bg-red-500">X</button>
            </td>
        </tr>)
     }
      
    </tbody>
  </table>
</div>
           </div>
        </div>
    );
};

export default Users;