
import React, { useEffect } from 'react';

import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
const Slider = () => {

    
    return (
        <>
              <Carousel>
                <div className="relative h-[489px]">
                    <img src="https://images.news18.com/ibnlive/uploads/2024/08/india-vs-bangladesh-2024-08-005a1cd054a1cada0a20dac01368a108.jpg?impolicy=website&width=640&height=480"className='h-full' />

                    {/* content */}
                    <div className='absolute bg-gradient-to-r from-[#151515] to-[rgba(21 , 21, 21 , 0)] py-5 w-full bottom-0'>
                        <div className='text-white'>
                        <h1 className="text-xl font-semibold">Bangladesh vs India</h1>
                        <p className="text-lg">1st Test * Chennai , MA Chidambaram Stadium </p>
                        <p className="text-lg">Thu, 19 Sep 2024 - Mon, 23 Sep 2024</p><span className="text-lg">Time : 9:00 - 4:00 (GMT)</span>
                        </div>

                    </div>
                    
                </div>
                <div className="relative h-[489px] object-cover">
                    <img src="https://i.ibb.co.com/DRqjx8p/world.jpg"className='h-full object-cover' />

                    {/* content */}
                    <div className='absolute bg-gradient-to-r from-[#151515] to-[rgba(21 , 21, 21 , 0)] py-5 w-full bottom-0'>
                        <div className='text-white'>
                        <h1 className="text-xl font-semibold">বিশ্বের বৃহত্তম ‘ইনডোর স্কি’ রিসোর্ট খুলে গিনেস ওয়ার্ল্ড রেকর্ডে চীন</h1>
                        <p className="text-lg">বিশ্বের বৃহত্তম শহরগুলোর মধ্যে সাংহাই। এই শহরেই প্রথমবারের মতো একটি ইনডোর স্কি রিসোর্ট খুলেছে চীন। অতিরিক্ত…</p>
                        
                        </div>

                    </div>
                    
                </div>
                <div className="relative h-[489px]">
                    <img src="https://i.ibb.co.com/xGrgLCS/iran.jpg"className='h-full object-cover' />

                    {/* content */}
                    <div className='absolute bg-gradient-to-r from-[#151515] to-[rgba(21 , 21, 21 , 0)] py-5 w-full bottom-0'>
                        <div className='text-white'>
                        <h1 className="text-xl font-semibold">ভারতীয় মুসলিমদের দুর্দশা নিয়ে মন্তব্যের জেরে খামেনির প্রতি নিন্দা নয়াদিল্লির</h1>
                        <p className="text-lg">ভারতের সংখ্যালঘু মুসলমানদের গাজার মুসলমানদের সাথে তুলনা করেছেন ইরানের…</p>
                        
                        </div>

                    </div>
                    
                </div>
                <div className="relative h-[489px]">
                    <img src="https://i.ibb.co.com/rt2dLTs/metro-2.jpg"className='h-full  object-cover' />

                    {/* content */}
                    <div className='absolute bg-gradient-to-r from-[#151515] to-[rgba(21 , 21, 21 , 0)] py-5 w-full bottom-0'>
                        <div className='text-white'>
                        <h1 className="text-xl font-semibold">যান্ত্রিক ত্রুটির কারণে আগারগাঁও থেকে মতিঝিল পর্যন্ত মেট্রোরেল চলাচল বন্ধ রয়েছে। </h1>
                        <p className="text-lg">এতে উত্তরা থেকে যার মতিঝিল, পল্টন, ঢাকা বিশ্ববিদ্যালয়…</p>
                        
                        </div>

                    </div>
                    
                </div>
                
               
            </Carousel>
        </>
    );
};

export default Slider;

