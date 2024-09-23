import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { TextInput } from "@components/ui/forms/input/TextInput";
import { EmailContactInput } from "@components/ui/forms/input/EmailContactInput";
import { PhoneInput } from "@components/ui/forms/input/PhoneInput";
import { Checkbox } from "@components/ui/forms/input/Checkbox";
import { FormProgression } from "./FormProgression";
import { InfoIcon } from "@/components/InfoIcon";

interface ContactFormInputs {
  restaurantName: string;
  city: string;
  fullName: string;
  email: string;
  phone: string;
  privacyPolicy?: boolean;
}

export const ContactForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const {
    handleSubmit,
    reset,
    control,
    formState: { errors },
    watch,
  } = useForm<ContactFormInputs>();

  const onSubmit = (data) => {
    console.log("Dane formularza:", data);
    setIsSubmitted(true);
  };

  const handleClear = () => {
    reset();
  };
  const watchFields = watch([
    "restaurantName",
    "city",
    "fullName",
    "email",
    "phone",
  ]);
  const filteredFields = watchFields.every((str) => str !== "" && str);

  return (
    <>
      <FormProgression isSubmitted={isSubmitted} />
      <div className="pt-9">
        <h2 className="flex text-balance pb-6 font-oswald text-3xl font-bold text-green-500">
          {!isSubmitted ? "Dane kontaktowe" : "Dziękujemy"}
        </h2>
        {!isSubmitted && (
          <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-5 lg:order-2 lg:max-w-xl lg:flex-row lg:flex-wrap">
              <div className="lg:max-w-80 lg:flex-grow">
                <Controller
                  name="restaurantName"
                  control={control}
                  defaultValue=""
                  rules={{ required: "To pole jest wymagane" }}
                  render={({ field }) => (
                    <>
                      <TextInput
                        {...field}
                        placeholder="Nazwa restauracji"
                        error={errors.restaurantName}
                      />
                      {errors.restaurantName && (
                        <span className="text-red-500">
                          {errors.restaurantName.message}
                        </span>
                      )}
                    </>
                  )}
                />
              </div>
              <div className="lg:max-w-80 lg:flex-grow">
                <Controller
                  name="city"
                  control={control}
                  defaultValue=""
                  rules={{ required: "To pole jest wymagane" }}
                  render={({ field }) => (
                    <>
                      <TextInput
                        {...field}
                        placeholder="Miejscowość"
                        error={errors.city}
                      />
                      {errors.city && (
                        <span className="text-red-500">
                          {errors.city.message}
                        </span>
                      )}
                    </>
                  )}
                />
              </div>
              <div className="lg:max-w-80 lg:flex-grow">
                <Controller
                  name="fullName"
                  control={control}
                  defaultValue=""
                  rules={{ required: "To pole jest wymagane" }}
                  render={({ field }) => (
                    <>
                      <TextInput
                        {...field}
                        placeholder="Imię i nazwisko"
                        error={errors.fullName}
                      />
                      {errors.fullName && (
                        <span className="text-red-500">
                          {errors.fullName.message}
                        </span>
                      )}
                    </>
                  )}
                />
              </div>
              <div className="lg:max-w-80 lg:flex-grow">
                <Controller
                  name="email"
                  control={control}
                  defaultValue=""
                  rules={{
                    required: "To pole jest wymagane",
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: "Nieprawidłowy format email",
                    },
                  }}
                  render={({ field }) => (
                    <>
                      <EmailContactInput
                        {...field}
                        placeholder="Adres e-mail"
                        error={errors.email}
                      />
                      {errors.email && (
                        <span className="text-red-500">
                          {errors.email.message}
                        </span>
                      )}
                    </>
                  )}
                />
              </div>
              <div className="lg:max-w-[278px] lg:flex-grow">
                <Controller
                  name="phone"
                  control={control}
                  defaultValue=""
                  rules={{
                    required: "To pole jest wymagane",
                    pattern: {
                      value: /^[0-9]+$/,
                      message: "Numer telefonu może zawierać tylko cyfry",
                    },
                  }}
                  render={({ field }) => (
                    <>
                      <PhoneInput
                        {...field}
                        placeholder="Numer telefonu"
                        error={errors.phone}
                      />
                      {errors.phone && (
                        <span className="text-red-500">
                          {errors.phone.message}
                        </span>
                      )}
                    </>
                  )}
                />
              </div>
            </div>
            <div className="mb-5 mt-3 lg:order-3">
              <Controller
                name="privacyPolicy"
                control={control}
                defaultValue={false}
                rules={{
                  required: "Musisz zaakceptować politykę prywatności",
                  pattern: {
                    value: /^[0-9]+$/,
                    message: "Numer telefonu może zawierać tylko cyfry",
                  },
                }}
                render={({ field }) => (
                  <>
                    <Checkbox
                      {...field}
                      label="Zapoznałem się i zgadzam się z treścią polityki prywatności."
                      id="checkbox-id"
                    />
                    {errors.privacyPolicy && (
                      <span className="text-red-500">
                        {errors.privacyPolicy.message}
                      </span>
                    )}
                  </>
                )}
              />
            </div>
            {filteredFields && (
              <div className="my-4 flex items-center rounded-sm border-2 border-green-200 bg-grayText-100 px-2 py-1 lg:order-1">
                <InfoIcon />
                <p className="ml-2 text-xs text-green-500">
                  Czy sprawdziłeś wszystko?
                </p>
              </div>
            )}
            <div className="flex flex-row-reverse gap-4 lg:order-4">
              <button
                type="submit"
                className="w-32 rounded bg-green-500 text-white hover:bg-green-400"
              >
                Zamów
              </button>
              <button
                type="reset"
                className="clear-btn w-32 rounded bg-green-50 p-2 text-green-500 shadow-md hover:bg-grayText-100"
                onClick={handleClear}
              >
                Wyczyść
              </button>
            </div>
          </form>
        )}
      </div>
    </>
  );
};
