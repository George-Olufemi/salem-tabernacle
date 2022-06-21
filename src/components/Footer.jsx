import React from "react";
import phone from '../phone/phone.png';
import mail from '../mail/mail.png';
import address from '../address/pin_drop.png';

function Footer() {
  return(
    <React.Fragment>
        <div className="bg-black">
            <div className="bg-black text-white md:grid md:grid-cols-3 text-center md:gap-4 pt-6 py-16 px-16">
            {/* phone */}
                <div className="pb-6">
                    <div className="flex justify-center items-center pb-2 md:pb-5">
                        <div>
                            <img className='pr-2' src={phone} alt="phone" />
                        </div>
                        <div className="font-semibold text-xl">
                            <h3>Phone</h3>
                        </div>
                    </div>
                    <p>+234-803-707-1859</p>
                    <p>+234-806-330-2922</p>
                    <p>+234-810-101-9892</p>
                </div>
                {/* email */}
                <div className="pb-6">
                    <div className="flex justify-center items-center pb-2 md:pb-5">
                        <div>
                            <img className='pr-2' src={mail} alt="phone" />
                        </div>
                        <div className="font-semibold text-xl">
                            <h3>Email</h3>
                        </div>
                    </div>
                    <p>bekfem@yahoo.com</p>
                </div>
                {/* address */}
                <div className="pb-6">
                    <div className="flex justify-center items-center pb-2 md:pb-5">
                        <div>
                            <img className='pr-2' src={address} alt="phone" />
                        </div>
                        <div className="pr-2 font-semibold text-xl">
                            <h3>Address</h3>
                        </div>
                    </div>
                    <p>3 Salem Close,<br /> Akarawak Street,<br /> Off Iko Ekwa Road,<br /> Eket,<br /> Akwa Ibom State.</p>
                </div>
            </div>
                <div className="text-white text-center pb-5">
                    <h3>God Bless you.</h3>
                    <h3>&copy; Salem Tabernacle</h3>
                </div>
        </div>
    </React.Fragment>
  );
}

export default Footer;