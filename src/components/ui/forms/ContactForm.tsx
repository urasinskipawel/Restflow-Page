import { useForm } from "react-hook-form";
import { TextInput } from "@components/ui/forms/input/TextInput";
import { EmailContactInput } from "@components/ui/forms/input/EmailContactInput";
import { PhoneInput } from "@components/ui/forms/input/PhoneInput";
import { Checkbox } from "@components/ui/forms/input/Checkbox";

export const ContactForm = ({ formTitle }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Dane formularza:", data);
  };

  const handleClear = () => {
    reset();
  };

  const log = () => {
    console.log("dziala");
  };

  return (
    <div className="pt-9">
      <h2 className="flex text-balance pb-6 font-oswald text-3xl font-bold text-green-500">
        {formTitle}
      </h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-5">
          <TextInput
            id="hs-firstname-contacts"
            label="Nazwa restauracji"
            {...register("restaurantName", {
              required: "To pole jest wymagane",
            })}
          />
          {errors.restaurantName && (
            <span className="text-red-500">
              {/* {errors.restaurantName.message} */}
            </span>
          )}
          <TextInput
            id="hs-lastname-contacts"
            label="Miejscowość"
            {...register("city", { required: "To pole jest wymagane" })}
          />
          {errors.city && (
            <span className="text-red-500">{/* {errors.city.message} */}</span>
          )}
          <TextInput
            id="hs-fullname-contacts"
            label="Imię i nazwisko"
            {...register("fullName", { required: "To pole jest wymagane" })}
          />
          {errors.fullName && (
            <span className="text-red-500">
              {/* {errors.fullName.message} */}
            </span>
          )}
          <EmailContactInput
            id="hs-email-contacts"
            label="Adres e-mail"
            {...register("email", {
              required: "To pole jest wymagane",
              pattern: /^\S+@\S+$/i,
            })}
          />
          {errors.email && (
            <span className="text-red-500">{/* {errors.email.message} */}</span>
          )}

          <PhoneInput
            id="hs-phone-number"
            label="Numer telefonu"
            {...register("phone", {
              required: "To pole jest wymagane",
              pattern: /^[0-9]+$/,
            })}
          />
          {errors.phone && (
            <span className="text-red-500">{/* {errors.phone.message} */}</span>
          )}
        </div>

        <div>
          <Checkbox
            id="checkbox"
            label="Zapoznałem się i zgadzam się z treścią polityki prywatności."
            {...register("privacyPolicy", {
              required: "Musisz zaakceptować politykę prywatności",
            })}
          />
          {errors.privacyPolicy && (
            <span className="text-red-500">
              {/* {errors.privacyPolicy.message} */}
            </span>
          )}
        </div>

        <div className="flex flex-row-reverse gap-4">
          <button
            type="submit"
            className="w-32 rounded bg-green-500 text-white"
          >
            Zamów
          </button>
          <button
            type="button"
            className="clear-btn w-32 rounded bg-green-50 p-2 text-green-500 shadow-md"
            onClick={log}
          >
            Wyczyść
          </button>
        </div>
      </form>
    </div>
  );
};
