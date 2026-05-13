import i18next from "i18next";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import send from "../../../assets/images/send.svg";
import email from "../../../assets/images/email.svg";
import phone from "../../../assets/images/phone.svg";
import location from "../../../assets/images/location.svg";
import { useContactUs } from "../hook/usePostContact";
import toast, { Toaster } from "react-hot-toast";

const contactFormSchema = z.object({
  full_name: z.string().min(1, i18next.t("contact_validation.name_req")),

  email: z
    .string()
    .min(1, i18next.t("contact_validation.email_req"))
    .email(i18next.t("contact_validation.email_invalid")),

  subject: z.string().min(1, i18next.t("contact_validation.subject_required")),

  message: z.string().min(1, i18next.t("contact_validation.message_required")),
});
const ContactGrid = ({ contactData, homePageData }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      full_name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const { mutate: contactUs, isPending } = useContactUs();

  const onSubmit = async (data) => {
    const formData = {
      name: data.full_name,
      email: data.email,
      object: data.subject,
      message: data.message,
    };

    contactUs(formData, {
      onSuccess: () => {
        toast.success("message send successfully")
        reset(); // Reset form fields
      },
      onError: (error) => {
        toast.error("Error sending messag");
      },
    });
  };

  return (
    <>
      <Toaster position="top-center" />
      <div className="bg-white w-full h-auto md:py-[4rem] py-[2rem]">
        <div className="container3 mx-auto">
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-y-[2rem] gap-x-[4rem]">
            {/* first column */}
            <div className="flex flex-col mt-[3rem]">
              <h1 className="font-bold md:text-[2.5rem] text-[2rem] text-[#333333]">
                {i18next.t("ContactGrid.contact_us_directly")}
              </h1>
              <p className="text-[#525252] text-lg mt-2">
                {i18next.t("ContactGrid.response_time")}
              </p>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="mt-[2rem] flex flex-col space-y-[1.4rem]"
              >
                <div className="grid grid-cols-2 gap-x-[0.8rem]">
                  <div className="flex flex-col">
                    <input
                      placeholder={i18next.t("ContactGrid.full_name")}
                      type="text"
                      className={`h-[3.8rem] w-full border px-[1.5rem] placeholder-[#959595] focus:outline-0 ${
                        errors.full_name ? "border-red-500" : "border-gray-300"
                      } rounded-md`}
                      {...register("full_name")}
                    />
                    {errors.full_name && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.full_name.message}
                      </p>
                    )}
                  </div>
                  <div className="flex flex-col">
                    <input
                      placeholder={i18next.t("ContactGrid.email")}
                      type="email"
                      className={`h-[3.8rem] w-full border px-[1.5rem] placeholder-[#959595] focus:outline-0 ${
                        errors.email ? "border-red-500" : "border-gray-300"
                      } rounded-md`}
                      {...register("email")}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                </div>
                <div className="flex flex-col">
                  <input
                    placeholder={i18next.t("ContactGrid.subject")}
                    type="text"
                    className={`h-[3.8rem] w-full border px-[1.5rem] placeholder-[#959595] focus:outline-0 ${
                      errors.subject ? "border-red-500" : "border-gray-300"
                    } rounded-md`}
                    {...register("subject")}
                  />
                  {errors.subject && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.subject.message}
                    </p>
                  )}
                </div>
                <div className="flex flex-col">
                  <textarea
                    placeholder={i18next.t("ContactGrid.message")}
                    className={`h-[17rem] w-full border p-[1.5rem] placeholder-[#959595] focus:outline-0 ${
                      errors.message ? "border-red-500" : "border-gray-300"
                    } rounded-md`}
                    {...register("message")}
                  />
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.message.message}
                    </p>
                  )}
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting || isPending}
                  className="w-full h-[5rem] bg-primary rounded-md flex gap-x-2 items-center justify-center text-lg font-bold text-white cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  <p>
                    {isSubmitting || isPending
                      ? i18next.t("contact_validation.sending")
                      : i18next.t("ContactGrid.send")}
                  </p>
                  <img
                    className={`w-[1.5rem] h-[1.5rem] ${
                      i18next.language == "ar" ? "" : "rotate-[180deg]"
                    }`}
                    src={send}
                    alt="send"
                  />
                </button>
              </form>
            </div>

            {/* second column - keep as is */}
            <div className="flex flex-col space-y-[2rem]">
              <div className="grid md:grid-cols-2 grid-cols-1 gap-y-[2rem] gap-x-[2rem]">
                <div className="w-full h-[14rem] bg-[#E9EFF0] rounded-md p-[2rem] flex flex-col space-y-[1.5rem]">
                  <div className="w-[3.5rem] h-[3.5rem] flex justify-center items-center bg-primary rounded-md">
                    <img
                      src={email}
                      className="w-[1.5rem] h-[1.5rem]"
                      alt="email"
                    />
                  </div>
                  <h1 className="font-bold text-dark md:text-2xl text-xl">
                    {i18next.t("ContactGrid.email_title")}
                  </h1>
                  <p className="text-primary text-lg">
                    {contactData?.data?.email}
                  </p>
                </div>
                <div className="w-full h-[14rem] bg-[#E9EFF0] rounded-md p-[2rem] flex flex-col space-y-[1.5rem]">
                  <div className="w-[3.5rem] h-[3.5rem] flex justify-center items-center bg-primary rounded-md">
                    <img
                      src={phone}
                      className="w-[1.5rem] h-[1.5rem]"
                      alt="phone"
                    />
                  </div>
                  <h1 className="font-bold text-dark md:text-2xl text-xl">
                    {i18next.t("ContactGrid.phone_title")}
                  </h1>
                  <p className="text-primary text-lg">
                    {contactData?.data?.phone_number}
                  </p>
                </div>
              </div>

              <div className="w-full h-auto py-[2.5rem] bg-secondary rounded-md flex justify-center items-center">
                <div className="flex gap-x-[1rem] lg:px-0 px-[1rem]">
                  <img
                    className="w-[2rem] h-[2rem] mt-4"
                    src={location}
                    alt="location"
                  />
                  <div>
                    <h1 className="font-bold text-white text-xl">
                      {i18next.t("ContactGrid.main_headquarters")}
                    </h1>
                    <p className="text-[#FFFFFF] text-lg mt-2">
                      {i18next.t("ContactGrid.address")}
                    </p>
                  </div>
                </div>
              </div>

              <div className="w-full h-[22rem] rounded-2xl">
                <iframe
                  src={homePageData?.data?.location}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={i18next.t("ContactGrid.location_map")}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactGrid;
