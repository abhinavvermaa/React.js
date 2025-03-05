const Footer =()=>{
  return (
    <>
    <div className="flex flex-row max-w-full sm:flex-nowrap  flex-wrap items-center bg-gray-100">
    {/* <img  src=".\logo\logo.png" alt="img" /> */}
    <div className="text-5xl font-bold text-red-300 h-40 m-10 p-5" >Shop Seamless</div>
    <ul className="flex flex-row justify-evenly m-10 w-full flex-wrap" >
      <li className="hover:cursor-pointer p-2 max-w-full m-4 text-xl font-semibold ">Home</li>
      <li className="hover:cursor-pointer p-2 max-w-full m-4 text-xl font-semibold" >Shop</li>
      <li className="hover:cursor-pointer p-2 max-w-full m-4 text-xl font-semibold">Products</li>
      <li className="hover:cursor-pointer p-2 max-w-full m-4 text-xl font-semibold">Pages</li>
      <li className="hover:cursor-pointer p-2 max-w-full m-4 text-xl font-semibold">About us</li>
      <li className="hover:cursor-pointer p-2 max-w-full m-4 text-xl font-semibold">Contact us </li>
    </ul>
  </div>
    <p className="text-center bg-gray-100 ">Copyright © 2025 Seamless Shop . All Rights Reseved.</p>
  </>
)
}
export default Footer