function Body()
{
    return (
        <>
        <div className="space-y-4 lg:flex lg:pl-20">
            <div className="flex items-center justify-center lg:flex-1 lg:order-2 lg:justify-end">
                <img src="./assets/Blue-Shape.svg" alt="1st" className="-rotate-45 h-64 md:h-96 lg:h-[400px]"/>
                <img src="./assets/Pink-Shape.svg" alt="2nd" className="absolute -rotate-[30deg] h-64 md:h-96 lg:h-[400px]"/>
                <img src="./assets/Purple-Shape.svg" alt="3rd" className="absolute -rotate-[15deg] h-64 md:h-96 lg:h-[400px]"/>
                <img src="./assets/Hero-Model.png" alt="4th" className="absolute h-64 md:h-96 lg:h-[400px]"/>
            </div>
            <div className="lg:flex-1 lg:order-1">
                <h1 className="text-4xl font-bold font-playfair leading-tight lg:text-5xl">Host your website in less than 5 minutes</h1>
                <p className="font-lato text-gray-500 my-3 lg:text-lg">With hosterr, get your website up and running in no less than 5 minutes with the most competitive pricing packages available online.</p>
                <form action="" className="flex flex-col gap-4 md:flex-row">
                    <input type="email" 
                    placeholder="Enter e-mail address"
                    className="rounded-md px-4 py-3 placeholder:text-gray-500 mt-2"
                    />
                    <button className="rounded-md px-4 py-3 bg-blue-600 hover:bg-blue-800 text-white">Join Waitlist</button>
                </form>
                <div className="flex gap-2 mt-4">
                    <img src="./assets/Checkmark.svg" alt="check" />
                    <p className="text-lato text-gray-500">No spam, ever. Unsubscribe anytime</p>
                </div>
            </div>
        </div>
        </>
    );
}

export default Body;