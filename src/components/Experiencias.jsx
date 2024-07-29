import React from "react";
function Experiencias(){
    return(
        
        <div className="flex justify-center items-center">
            <div className=" flex flex-col items-center w-3/4 space-y-8 md:px-10 py-16" >
                <div className="bg-slate-100 border-2 border-slate-200 rounded-sm p-1 shadow-2xl sm:flex h-1/2 md:justify-between">
                    <div className="h-1/2 sm:w-1/2 p-4">
                        <h1 className="text-2xl">Mi Experiencia</h1>
                        <h1>Lorem ipsum dolor sit, amet consectetur adipisicing elit. In velit eligendi placeat? Animi corrupti sapiente cumque atque mollitia nostrum molestias voluptates veritatis. Amet ratione veniam provident totam enim perspiciatis id? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur id nulla, quis illum nisi sed sit quidem. Minus exercitationem fugiat accusantium. Vel ullam quae tempora sint in dignissimos vero culpa!</h1>
                    </div>
                    <img className="overflow-hidden sm:w-72" src="https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?q=80&w=2067&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="experiencia1" />
                </div>
                <div className="bg-slate-100 border-2 border-slate-200 rounded-sm p-1 shadow-2xl sm:flex h-1/2 sm:justify-between">
                    <div className="h-1/2 sm:w-1/2 p-4">
                        <h1 className="text-2xl">Mi Experiencia</h1>
                        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, tempora iure facere illo aliquid ut molestias mollitia eligendi officia labore? Vel, tempora vitae. Praesentium eius expedita quam hic ullam architecto? Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed delectus, nemo non cumque iusto sequi dolorum! Voluptas corrupti molestias accusantium similique doloribus.</h1>
                    </div>
                    <img className="overflow-hidden  sm:h-72" src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="experiencia2" />
                </div>
            </div>
        </div>
    )
}

export default Experiencias