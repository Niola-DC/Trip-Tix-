import React from 'react';
import { IoMail } from "react-icons/io5";
import { FaStar } from 'react-icons/fa';
import { RiContactsBook3Fill } from 'react-icons/ri';
import { IoBookmarkSharp } from 'react-icons/io5';

const infos = [
    {
        icon: <IoMail />,
        text: 'New Messages',
        num: '10',
    },
    {
        icon: <FaStar />,
        text: 'New Reviews',
        num: '10',
    },
    {
        icon: <IoBookmarkSharp />,
        text: 'New Users',
        num: '6',
    },
    {
        icon: <RiContactsBook3Fill />,
        text: 'New Booking',
        num: '10',
    },
];

export default infos;
