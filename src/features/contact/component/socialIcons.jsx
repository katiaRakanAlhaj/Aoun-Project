import { TfiFacebook } from "react-icons/tfi";
import { FaTwitter, FaWhatsapp, FaYoutube } from "react-icons/fa";

const SocialIcons = ({contactData}) => {
    const socialLinks = [
      {
        id: "facebook",
        icon: TfiFacebook,
        url: contactData?.data?.facebook,
        label: "Facebook",
      },
      {
        id: "twitter",
        icon: FaTwitter,
        url: contactData?.data?.x,
        label: "Twitter",
      },
      {
        id: "whatsapp",
        icon: FaWhatsapp,
        url: contactData?.data?.whatsapp_number 
          ? `https://wa.me/${contactData.data.whatsapp_number.replace(/\D/g, '')}`
          : null,
        label: "WhatsApp",
      },
    ];

  return (
    <div className="flex gap-x-4 mt-[1.5rem] justify-center md:justify-start">
      {socialLinks.map((social) => (
        social.url && (
          <a
            key={social.id}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.label}
            className="w-[3rem] h-[3rem] flex justify-center items-center bg-[#E4E7E5] rounded-xl cursor-pointer transition-all duration-300"
          >
            <social.icon className="text-[1.5rem]" />
          </a>
        )
      ))}
    </div>
  );
};

export default SocialIcons;