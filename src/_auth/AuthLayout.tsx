import { Outlet ,Navigate} from "react-router-dom"
const AuthLayout = () => {

    const isAuthenticated = false;
    
  return (
    <>
    {  isAuthenticated ? <Navigate to='/'/> :
     <section className="flex flex-1 justify-ceenter items-center flex-col py-10" >
       <Outlet/>
     </section> }
     <img src="" alt="" />
    </>
  )
}

export default AuthLayout