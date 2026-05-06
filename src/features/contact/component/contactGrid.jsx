import send from "../../../assets/images/send.svg";
import email from "../../../assets/images/email.svg";
import phone from "../../../assets/images/phone.svg";
import location from "../../../assets/images/location.svg";

const ContactGrid = () => {
  return (
    <div className="bg-white w-full h-auto py-[4rem]">
      <div className="container3 mx-auto">
        <div className="grid grid-cols-2 gap-x-[4rem]">
          {/* first column */}
          <div className="flex flex-col mt-[3rem]">
            <h1 className="font-bold text-[2.5rem] text-[#333333]">
              تواصلوا معنا مباشرة
            </h1>
            <p className="text-[#525252] text-lg mt-2">
              سنقوم بالرد على استفساراتكم خلال أقل من 24 ساعة عمل.
            </p>
            <form className="mt-[2rem] flex flex-col space-y-[1.4rem]">
              <div className="grid grid-cols-2 gap-x-[0.8rem]">
                <input
                  placeholder="الاسم الكامل"
                  type="text"
                  className="h-[3.8rem] w-full border px-[1.5rem] placeholder-[#959595] focus:outline-0 border-gray-300 rounded-md"
                />
                <input
                  placeholder="البريد الإلكتروني"
                  type="text"
                  className="h-[3.8rem] w-full border px-[1.5rem] placeholder-[#959595] focus:outline-0 border-gray-300 rounded-md"
                />
              </div>
              <input
                placeholder="الموضوع"
                type="text"
                className="h-[3.8rem] w-full border px-[1.5rem] placeholder-[#959595] focus:outline-0 border-gray-300 rounded-md"
              />
              <textarea
                placeholder="الرسالة"
                className="h-[17rem] w-full border p-[1.5rem] placeholder-[#959595] focus:outline-0 border-gray-300 rounded-md"
              />
              <button className="w-full h-[5rem] bg-primary rounded-md flex gap-x-2 items-center justify-center text-lg font-bold text-white cursor-pointer">
                <p>إرسال</p>
                <img className="w-[1.5rem] h-[1.5rem]" src={send} alt="send" />
              </button>
            </form>
          </div>
          
          {/* second column */}
          <div className="flex flex-col space-y-[2rem]">
            <div className="grid grid-cols-2 gap-x-[2rem]">
              <div className="w-full h-[14rem] bg-[#E9EFF0] rounded-md p-[2rem] flex flex-col space-y-[1.5rem]">
                <div className="w-[3.5rem] h-[3.5rem] flex justify-center items-center bg-primary rounded-md">
                  <img src={email} className="w-[1.5rem] h-[1.5rem]" alt="email" />
                </div>
                <h1 className="font-bold text-dark text-2xl">
                  البريد الإلكتروني
                </h1>
                <p className="text-primary text-lg">support@al-majan.om</p>
              </div>
              <div className="w-full h-[14rem] bg-[#E9EFF0] rounded-md p-[2rem] flex flex-col space-y-[1.5rem]">
                <div className="w-[3.5rem] h-[3.5rem] flex justify-center items-center bg-primary rounded-md">
                  <img src={phone} className="w-[1.5rem] h-[1.5rem]" alt="phone" />
                </div>
                <h1 className="font-bold text-dark text-2xl">
                  الهاتف
                </h1>
                <p className="text-primary text-lg">+968 2440 0000</p>
              </div>
            </div>
            
            <div className="w-full h-auto py-[2.5rem] bg-secondary rounded-md flex justify-center items-center">
              <div className="flex gap-x-[1rem]">
                <img className="w-[2rem] h-[2rem] mt-4" src={location} alt="location" />
                <div>
                  <h1 className="font-bold text-white text-xl">المقر الرئيسي</h1>
                  <p className="text-[#FFFFFF] text-lg mt-2">سلطنة عمان، مسقط، منطقة غلا الصناعية، الطابق الرابع</p>
                </div>
              </div>
            </div>
            
            <div className="w-full h-[22rem] overflow-hidden rounded-2xl">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.8375!2d58.4059!3d23.5880!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e8d4e8c8c8c8c8d%3A0x8c8c8c8c8c8c8c8c!2sMuscat%2C%20Oman!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Location Map"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactGrid;