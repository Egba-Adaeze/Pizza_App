import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";



const SignInForm = () => {
  return (
    <>
    <NavBar/>
      <div className="bg-white text-center pt-[10rem]">
        <h3 className="font-bold">Admin Dashboard</h3>
        <form className="bg-white p-4 rounded-md">
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Email address"
            required
            className="w-[30%] p-2 border text-black rounded-md "
          />
          <br />
          <br />
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            required
            className="w-[30%] p-2 border rounded-md"
          />
          <br />

          <button
            type="submit"
            className="bg-teal-600 hover:bg-teal-600 text-white font-bold py-2 px-4 mt-4 w-[30%] rounded"
          >
            Sign In
          </button>
        </form>
      </div>
      <Footer/>
    </>
  );
};

export default SignInForm;
