import SocialMediaIcons from "../components/SocialMediaIcons"
const Footer=()=>{

    return(
        <footer className="h-64 bg-light-blue pt-10">
            <div className="w-5/6 mx-auto">
              <SocialMediaIcons/>
              <div className="md:flex justify-center md:justify-between text-center">
                <p className="font-playfair font-semibold text-2xl text-yellow">
                    MULUNEH DEBEBE
                </p>

                <p className="font-playfair text-md text-yellow text-1xl md:text-base">
                ©2025 MD. All Rights Reserved.
                </p>

              </div>

            </div>
        </footer>
    )
}

export default Footer