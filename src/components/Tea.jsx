import { Link } from "react-router-dom";


const Tea = ({tea}) => {
    const {_id,name,quantity,origin,category,chef,photo,price} = tea
    return (
        <div>
            <div className="card bg-base-100 w-96 shadow-xl">
  <figure>
    <img
      src={photo}
      alt="Shoes" className="h-[200px] w-full object-cover" />
  </figure>
  <div className="card-body ">
    <h2 className="card-title">{name}</h2>
    <div className="flex justify-between">
    <div className="space-y-3">
    <p>Quantity: {quantity}</p>
    <p>origin: {origin}</p>
    <p>category: {category}</p>
    </div>
   <div className="space-y-3">
   <p>chef: {chef}</p>
   <p>Price: {price}</p>
   </div>
   <div className="join join-vertical space-y-3">
  <button className="btn join-item bg-transparent border-[1px] border-green-500">Read</button>
 <Link to={`/update/${_id}`}>
 <button className="btn join-item bg-orange-400">Update</button>
 </Link>
  <button className="btn join-item bg-red-500">Delete</button>
</div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Tea;