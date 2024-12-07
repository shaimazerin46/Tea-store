import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";


const Signin = () => {
  const {signin} = useContext(AuthContext)

    const handleTeaLogin = (e)=>{
        e.preventDefault();
        const form = e.target;
        const password = form.password.value;
        const email = form.email.value;
        console.log(password,email);
        signin(email,password)
        .then(res=>{
          console.log(res.user);
          const lastSignInTime = res?.user?.metadata?.lastSignInTime;
          const loginInfo = {email,lastSignInTime};
          fetch(`http://localhost:5000/users`,{
            method: "PATCH",
            headers: {
              "Content-type": "application/json"
            },
            body: JSON.stringify(loginInfo)
          })
          .then(res=>res.json())
          .then(data=>{
            console.log("Sign in info updated in db",data)
          })
        })
        .catch(error=>console.log(error.message))
        
    }
    return (
        <div>
            <h3 className="text-xl text-center font-bold py-10">Login please</h3>
            <div className="mx-auto card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form onSubmit={handleTeaLogin} className="card-body">
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

export default Signin;