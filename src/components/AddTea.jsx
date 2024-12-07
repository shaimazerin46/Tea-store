import Swal from 'sweetalert2'

const AddTea = () => {
    const handleAddTea = (e) => {
        e.preventDefault();
        const form = e.target
        const name = form.name.value;
        const quantity = form.quantity.value;
        const origin = form.origin.value;
        const category = form.category.value;
        const chef = form.chef.value;
        const photo = form.photo.value;
        const price = form.price.value;
        console.log(name,quantity,origin,category,chef,photo,price);
        const tea = {
            name,quantity,origin,category,chef,photo,price
        }
        fetch('http://localhost:5000/teas',{
            method: 'POST',
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(tea)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.insertedId){
                Swal.fire("Tea item is added!");
            }
        })
        
    }
    return (
        <div className="bg-orange-100 h-screen">
            <h3 className="pt-10 text-center mb-10 text-xl font-bold">Add tea to website</h3>
            <form onSubmit={handleAddTea} className="w-3/5 mx-auto">
                <div className="flex gap-5 ">
                    <input name="name" type="text" placeholder="Tea name" className="w-full p-3 border-[1px] border-black rounded-xl"/>
                    <input name="quantity" type="text" placeholder="quantity" className="w-full p-2 border-[1px] border-black rounded-xl"/>
                </div>

                <div className="flex gap-5 my-5">
                    <input name="origin" type="text" placeholder="origin" className="w-full p-3 border-[1px] border-black rounded-xl"/>
                    <input name="category" type="text" placeholder="category" className="w-full p-2 border-[1px] border-black rounded-xl"/>
                </div>

                <div className="flex gap-5  my-5">
                    <input name="chef" type="text" placeholder="chef" className="w-full p-3 border-[1px] border-black rounded-xl"/>
                    <input name="price" type="text" placeholder="price" className="w-full p-2 border-[1px] border-black rounded-xl"/>
                </div>
                <div className="flex gap-5  my-5">
                    <input name="photo" type="text" placeholder="photo" className="w-full p-3 border-[1px] border-black rounded-xl"/>
                   
                </div>
                <button className="flex justify-center mx-auto btn bg-red-950 px-10 text-white">Add</button>
            </form>
        </div>
    );
};

export default AddTea;