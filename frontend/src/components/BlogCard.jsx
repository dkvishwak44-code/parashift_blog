import React from "react";
import button_arrow from "../assets/button_arrow.svg";
import { useNavigate } from "react-router-dom";
import { FaCalendarAlt } from "react-icons/fa";


const BlogCard = ({item}) => {

    const navigate = useNavigate();


const handleClick = (slug)=>{
    console.log(slug);
    
      navigate(`/blog/${slug}`)
      window.location.reload();
  }


  const truncateTitle = (title) => {
  const words = title.split(" ");
  if (words.length <= 7) {
    return title; // Return full title if 9 or fewer words
  }
  return words.slice(0, 7).join(" ") + "..."; // Truncate and add ellipsis
};


  return (
   <div className="group relative flex flex-col justify-between border border-gray-300 hover:shadow-lg transition-all duration-300">
               {/* Category badge - stays static */}
               <div className="absolute top-2 left-2 bg-black text-white py-1 px-2 z-10"
               dangerouslySetInnerHTML={{__html:item.category}}
               >
               </div>
   
               {/* Image section */}
               <div className="overflow-hidden">
                 <img
                   src={item.acf.blog_image}
                   alt=""
                   className="w-full h-60 object-cover group-hover:scale-100 transition-transform duration-300"
                 />
               </div>
   
               {/* Date section */}
               <div className="px-5 mt-4 mb-6">
                 <div className="flex gap-2 items-center text-gray-600"><FaCalendarAlt />{(new Date(item.date_gmt)).toLocaleDateString('en-GB',{
                   day:"numeric",
                   month :"short",
                   year:"numeric"
                 }).replace(/ /g,' ')}</div>
               </div>
   
               {/* Title section - moves up on hover */}
               <div className="text-xl flex flex-col justify-end font-semibold pb-10 pt-10 px-5 transition-all duration-300 group-hover:-translate-y-15"
                 dangerouslySetInnerHTML={{
               __html: truncateTitle(item.title),
             }}>
               </div>
               
   
               {/* READ MORE button - hidden by default, shows on hover */}
               <div className="absolute bottom-5 left-5 flex gap-2 border px-3 py-2 bg-white shadow-md rounded-md opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:-translate-y-2 cursor-pointer hover:bg-gray-50">
               <button className="flex gap-1 justify-center items-center" onClick={()=>{handleClick(item.slug)}}> READ MORE <img src={button_arrow} alt="" className="w-4 h-4" /></button> 
               </div>
             </div>
  );
};

export default BlogCard;
