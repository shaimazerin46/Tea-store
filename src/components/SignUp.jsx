import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";


const SignUp = () => {
    const {createUser} = useContext(AuthContext)
    const handleTeaSignup = (e)=>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value
        const email = form.email.value;
        const password = form.password.value;

        console.log(name,email,password);
        
        createUser(email,password)
        .then(res=>{
            console.log(res.user)
            const createdAt = res.user.metadata.createdAt;
            const lastSignInTime = res?.user?.metadata?.lastSignInTime;
            const newUser = {name,email,createdAt,lastSignInTime}
            
            // save newUser info to database
            fetch('http://localhost:5000/users',{
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify(newUser)
            })
            .then(res=>res.json())
            .then(data=>{
                console.log("Creating User to DB",data)
            })
        })
        .catch(error=>{
            console.log(error.message)
        })
        

    }
    return (
        <div>
            <h3 className="text-xl text-center font-bold py-10">Signup please</h3>
            <div className="mx-auto card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form onSubmit={handleTeaSignup} className="card-body">
      <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="name" placeholder="name" name="name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" name="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
    </div>
        </div>
    );
};

export default SignUp;