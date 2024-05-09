"use client"
import { log } from 'console';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';


export const getStaticProps = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const data = await res.json();
    console.log("sara" , data);
    
    return {
        props: { nonjas: data }
    }
}

export default function Data({ nonjas }: { nonjas: any }) {
    console.log(nonjas);
    
    // Add a check to ensure nonjas is defined before mapping over it
    if (!nonjas) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            {/* Map over nonjas if it's defined */}

            {
                nonjas && 
                <Link key={nonjas.id} href={"/about/" + nonjas.id}>
                    {/* Ensure to return the Link component */}
                    <a>{nonjas.title}</a>
                </Link>
            }
           
        </div>
    );
}
