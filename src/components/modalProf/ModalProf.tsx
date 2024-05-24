"use client";

import { useAddProf } from "@/hooks/api/useAddProf";
import { Dialog, Listbox, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import {
  SubmitHandler,
  useForm,
  Controller,
  useFieldArray,
} from "react-hook-form";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";

interface Preference {
  jour: string;
  heures: string[];
}

interface Inputs {
  idProf: string;
  nom: string;
  prenom: string;
  preferences: Preference[];
}

interface heure {
  heure: string;
  id: number;
}

const people = [
  { id: 1, heure: "8:00 AM - 10:00 AM" },
  { id: 2, heure: "10:00 AM - 12:00 AM" },
  { id: 3, heure: "14:00 PM - 16:00 PM" },
  { id: 4, heure: "16:00PM - 18:00 PM" },
];

export default function MyModal({ closeModalProf, isOpenProf }: any) {
  const [selectedLundi, setSelectedLundi] = useState<heure[]>([]);
  const [selectedMardi, setSelectedMardi] = useState<heure[]>([]);
  const [selectedMercredi, setSelectedMercredi] = useState<heure[]>([]);
  const [selectedJeudi, setSelectedJeudi] = useState<heure[]>([]);
  const [selectedVendredi, setSelectedVendredi] = useState<heure[]>([]);
  const { register, handleSubmit, control, setValue } = useForm<Inputs>();
  const { mutate } = useAddProf();

  const { fields, append, remove } = useFieldArray({
    control,
    name: "preferences",
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    mutate(data, { onSettled: () => closeModalProf() });
  };

  return (
    <>
      <Transition appear show={isOpenProf} as={Fragment}>
        <Dialog as="div" className="relative z-10 " onClose={closeModalProf}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Ajouter nouveau Professeur
                  </Dialog.Title>
                  <form
                    className="mt-2 flex flex-col gap-4"
                    onSubmit={handleSubmit(onSubmit)}
                  >
                    <div className="relative w-full min-w-[200px] h-11">
                      <input
                        className="w-full h-full px-3 py-3 font-sans text-sm font-normal transition-all bg-transparent border rounded-md peer text-blue-gray-700 outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 border-t-transparent focus:border-t-transparent border-blue-gray-200 focus:border-gray-900"
                        placeholder=" "
                        {...register("idProf")}
                      />
                      <label className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[4.1] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900">
                        Identifient Professeur
                      </label>
                    </div>
                    <div className="relative w-full min-w-[200px] h-11">
                      <input
                        className="w-full h-full px-3 py-3 font-sans text-sm font-normal transition-all bg-transparent border rounded-md peer text-blue-gray-700 outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 border-t-transparent focus:border-t-transparent border-blue-gray-200 focus:border-gray-900"
                        placeholder=" "
                        {...register("nom")}
                      />
                      <label className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[4.1] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900">
                        Nom
                      </label>
                    </div>
                    <div className="relative w-full min-w-[200px] h-11">
                      <input
                        className="w-full h-full px-3 py-3 font-sans text-sm font-normal transition-all bg-transparent border rounded-md peer text-blue-gray-700 outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 border-t-transparent focus:border-t-transparent border-blue-gray-200 focus:border-gray-900"
                        placeholder=" "
                        {...register("prenom")}
                      />
                      <label className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[4.1] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900">
                        Prenom
                      </label>
                    </div>

                    <Swiper
                      navigation={true}
                      modules={[Navigation]}
                      className="mySwiper "
                    >
                      <SwiperSlide>
                        {fields.map((preference, index) => (
                          <div
                            key={preference.id}
                            className="mb-4 p-4 border border-gray-300 rounded-md"
                          >
                            <label
                              htmlFor={`preferences[${index}].heures`}
                              className="block mt-2 text-sm font-medium text-gray-700"
                            >
                              Heures:
                            </label>
                            <Listbox
                              value={fields[index]?.heures || []}
                              onChange={(selectedHeures) => {
                                const updatedFields = [...fields];
                                updatedFields[index].heures = selectedHeures;

                                setValue("preferences", updatedFields);
                              }}
                              multiple
                            >
                              <div className="mt-1 relative">
                                <Listbox.Button className="relative w-full py-2 pl-3 pr-10 text-left bg-white border border-gray-300 rounded-md cursor-default focus:outline-none focus:ring focus:border-blue-300 sm:text-sm">
                                  <span className="block truncate">
                                    {fields[index] &&
                                    Array.isArray(fields[index].heures) &&
                                    fields[index].heures.length
                                      ? fields[index].heures.join(", ")
                                      : "Select hours"}
                                  </span>
                                </Listbox.Button>

                                <Transition
                                  as={Fragment}
                                  leave="transition ease-in duration-100"
                                  leaveFrom="opacity-100"
                                  leaveTo="opacity-0"
                                >
                                  <Listbox.Options className="absolute z-10 w-full py-1 mt-1 overflow-auto text-base bg-white shadow-lg max-h-60 rounded-md sm:text-sm">
                                    {[
                                      "8:00 AM-10:00 AM",
                                      "10:00 AM-12:00 AM",
                                      "14:00 PM-16:00 PM",
                                      "16:00 PM-18:00 AM",
                                    ].map((hour) => (
                                      <Listbox.Option key={hour} value={hour}>
                                        {({ selected }) => (
                                          <div
                                            className={`${
                                              selected
                                                ? "bg-blue-500 text-white"
                                                : "text-gray-900"
                                            } cursor-pointer select-none relative py-2 pl-10 pr-4`}
                                          >
                                            {hour}
                                          </div>
                                        )}
                                      </Listbox.Option>
                                    ))}
                                  </Listbox.Options>
                                </Transition>
                              </div>
                            </Listbox>

                            <label
                              htmlFor={`preferences[${index}].jour`}
                              className="block text-sm font-medium text-gray-700"
                            >
                              Jour:
                            </label>
                            <input
                              {...register(
                                `preferences[${index}].jour` as `preferences.${number}.jour`
                              )}
                              className="w-full p-2 mt-1 border rounded-md"
                            />

                            <button
                              type="button"
                              onClick={() => remove(index)}
                              className="mt-2 px-4 py-2 text-sm font-medium text-white bg-red-500 rounded-md hover:bg-red-600"
                            >
                              Remove
                            </button>
                          </div>
                        ))}
                      </SwiperSlide>

                      <button
                        type="button"
                        onClick={() => append({ jour: "", heures: [] })}
                        className=" w-full px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600"
                      >
                        Add Preference
                      </button>
                    </Swiper>

                    <button
                      type="submit"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-lg font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 mt-4"
                    >
                      Ajouter
                    </button>
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
