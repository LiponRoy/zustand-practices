"use client"
import { useCounterStore } from "@/store/count-store";


const Counter: React.FC = () => {

    const { count, increment, decrement } = useCounterStore();

    return (

        <div className=" h-screen w-full flex flex-col justify-center items-center">

            <p className=" text-[40px] font-bold">Count: {count}</p>

            <div className="flex justify-center items-center gap-x-8">
                <button className=" text-[30px] font-bold" onClick={increment}>+</button>

                <button className=" text-[30px] font-bold" onClick={decrement}>-</button>
            </div>

        </div>

    );

};

export default Counter;