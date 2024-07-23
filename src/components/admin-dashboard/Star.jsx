import React from 'react'
import { FaStar } from 'react-icons/fa'
import { FaStarHalfAlt } from "react-icons/fa";
import { AiOutlineStar } from 'react-icons/ai'

export default function Star({ stars, reviews }) {
    const ratingStar = Array.from({ length: 5 }, (elem, index) => {
        let number = index + 0.5;
        return (
            <span key={index}>
                {stars > index + 1 ? (
                    <FaStar className='text-amber-500' />
                ) : stars > number ? (
                    <FaStarHalfAlt className='text-amber-500' />
                ) : (
                    <AiOutlineStar className='text-amber-500' />
                )}
            </span>
        )
    });

    return (
        <div className='flex items-center'>
            {ratingStar}
            <p className='ml-2 text-gray-500 font-medium text-base'> December 19, 2018</p>
        </div>
    );
}
