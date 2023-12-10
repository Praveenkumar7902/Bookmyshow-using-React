import React from "react";
import {BsFillStarFill,BsChevronRight} from "react-icons/bs"

const launchRazorPay = () => {
  let options = {
    key: "rzp_test_CalpMiv99t1mx5",
    amount:200*100,
    currency:"INR",
    name:"Book My Show ",
    description:"Movie Purchase or Rental",
    image:"data:image/png;base64,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",
    handler: ()  =>{

      alert("Payment Done")
    },
     theme:{color:"#c4242d"}
  };
  let rzp = new window.Razorpay(options);
    rzp.open()

}

const MovieHero = () => {
    return(
  <>
    <div className="md:hidden">
    <img src="https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/leo-et00351731-1675663884.jpg" alt="poster"/>
     </div>
    <div className="hidden lg:hidden md:block ">
    <img src="https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/leo-et00351731-1675663884.jpg" alt="poster"/>
    </div>
    <div className="relative  hidden lg:block" style={{height:"30rem"}}>
    <div className="absolute h-full w-full z-10"
    style={{backgroundImage: "linear-gradient(90deg, rgb(26, 26, 26) 24.97%, rgb(26, 26, 26) 38.3%, rgba(26, 26, 26, 0.04) 97.47%, rgb(26, 26, 26) 100%)"} }/>
   <div className="absolute z-20  left-12 top-9">
 <img src="https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/leo-et00351731-1675663884.jpg" alt="leo poster"/>
 <p className="bg-black text-white">In Cinemas</p>
   </div>
  <div className=" absolute text-white left-72 px-20 z-20 gap-4 top-12 text-4xl font-bold  justify-between">
    <h1 >Leo</h1>
    <div className="absolute top-16 text-2xl font-bold flex ">
      <div className="text-red-400 text-3xl w-10 ">    <BsFillStarFill/> </div> 
        <p > 8.3/10</p>
        <div className="text-lg font-medium px-2 py-2 top-20 flex ">
            <nobr >492.6K Votes</nobr>
        </div>
        <BsChevronRight className="text-xs h-12 "/>
    </div>
    <div className="relative top-20  w-96 text-lg flex justify-between place-items-center bg-navcol-1000 px-4 py-4 rounded-md ">
      <div>
      <h1>Add your rating & review</h1>
      <h1 className="text-gray-300  font-normal ">your ratings matter</h1>
      </div>
      <div  className="text-navcol-1000 bg-white rounded-md font- px-1 py-1 ">
        <button>Rate now</button>
      </div>
    </div>
    <div className="absolute top-56 text-base rounded-sm font-normal bg-navcol-150 px-1 py-1 text-black">
    <p>2D , IMAX 2D</p>
      </div>
      <div className="absolute top-56 text-base left-52 rounded-sm font-normal bg-navcol-150 px-1 py-1 text-black"> 
      <h1>Tamil,Hindi,Telugu,Kannada</h1>
    </div>
    <div className="absolute top-72 text-base font-medium "> 
      <nobr> 2h 44m .  Action, Thriller . UA . 19 Oct, 2023</nobr>
    </div>
    <div className="absolute top-80 px-4 py-4">
      <button onClick={launchRazorPay} className="bg-red-500 text-base px-12 rounded-lg py-4">Book Tickets</button>
    </div>
  </div>
    <img className="w-full h-full " src="https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/leo-et00351731-1675663884.jpg" alt="poster"/>
    </div>
    
  </>
    )
};
export default MovieHero;
