import React,{useEffect, useState} from 'react'
import FoodData from '../data/FoodData';
import { useDispatch ,useSelector} from 'react-redux';

import { setCategory } from '../redux/slices/CategorySlice';


const CategoryMenu = () => {
const[categories,setCategories]=useState([ ]);

const listUniqueCategories=
()=>{
const uniqueCategories = [...new Set(FoodData.map((food)=>food.category)),

 ];
setCategories(uniqueCategories);
console.log(uniqueCategories);

}

useEffect(()=>{
listUniqueCategories();
},[ ]);


const dispatch=useDispatch();
const selectedCategory= useSelector((state)=>state.category.category);
  return (
    <div className='mx-6'>
        <h3 className='text-xl font-semibold'>Find The Best Food</h3>

        <div className='my-5 flex gap-3 overflow-x-scroll scroll-smooth lg:overflow-x-hidden'>
        <button 
onClick={()=>dispatch(setCategory("All"))}
className={`px-3 py-2 bg-gray-200 font-bold rounded-lg hover:bg-green-500text-white text-black  shadow-md transition duration-300 ease-in-out transform hover:bg-blue-600 hover:scale-105 hover:shadow-lg ${selectedCategory === "All" && "bg-green-500 text-black"}`}>All</button>
            {
              categories.map((category,index)=>{
return    (
  <button 
  onClick={() => dispatch(setCategory(category))}

key={index}
className={`px-3 py-2 bg-gray-200 font-bold rounded-lg hover:bg-green-500 hover:text-white  text-black  shadow-md transition duration-300 ease-in-out transform  hover:scale-105 hover:shadow-lg${selectedCategory===category && "bg-green-500 text-yellow-600"}`}>{category}</button>
);
              })
            }
        </div>
    </div>
  )
}

export default CategoryMenu