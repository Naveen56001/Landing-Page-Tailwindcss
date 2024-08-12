function Footer()
{
    return (
        <>
        <div className="flex flex-col gap-12 mb-10 md:flex-row md:justify-between lg:pl-20">
            <ul className="flex gap-6 font-lato text-gray-500 justify-around lg:text-lg">
                <li>
                    <a href="#">Facebook</a>
                </li>
                <li>
                    <a href="#">Instagram</a>
                </li>
                <li>
                    <a href="#">Twitter</a>
                </li>
            </ul>
            <div className="flex gap-2 lg:text-lg">
                <img src="./assets/Help-Avatar.svg" alt="help" />
                <div>
                    <p className="font-playfair font-thin">Have any questions?</p>
                    <a href="#" className="font-lato font-medium">Talk to a specialist</a>
                </div>
            </div>
        </div>
        </>
    );
}

export default Footer;