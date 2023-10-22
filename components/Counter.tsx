"use client"
import { useCounterStore } from "@/store/count-store";


const Counter: React.FC = () => {

    const { count, increment, decrement } = useCounterStore();



    const setFiveIncrements = () =>{
        useCounterStore.setState((state)=>({
            count:state.count+5
        }))

    }

    const setRemoveAll = () =>{
        useCounterStore.setState((state)=>({

            count:0

        }))

    }

    return (

        <div className=" h-screen w-full flex flex-col justify-center items-center">

            <p className=" text-[40px] font-bold">Count: {count}</p>

            <div className="flex justify-center items-center gap-x-8">
                <button className=" text-[30px] font-bold" onClick={increment}>+</button>

                <button className={` text-[40px] font-bold ${count === 0 && ' text-slate-400/50'}`} onClick={decrement}>-</button>

                <button className=" text-[30px] font-bold" onClick={setFiveIncrements}>+5</button>
                <button className=" text-[30px] font-bold" onClick={setRemoveAll}>Destroy</button>

            </div>

        </div>

    );

};

export default Counter;