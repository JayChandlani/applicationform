import { useEffect, useRef, useState } from 'react'
import { UploadIcon, PlusIcon, CloseIcon, EditIcon } from './icon'
import FormCard from './FormCard'
import Slider from './ui/Slider';
import { initialValues } from '../data/initialData';
import { FormData, FormQuestion } from '../types';
import { useForm, useFieldArray } from 'react-hook-form';
import Checkbox from './ui/CheckBox';
import SelectInput from './select/select-input';

const ApplicationForm = () => {

  const [formData, setFormData] = useState(initialValues);
  const [editModes, setEditModes] = useState<Array<boolean>>(Array(formData.attributes.personalInformation.personalQuestions.length).fill(false));

  useEffect(() => {
    fetch(`${process.env.REST_API_ENDPOINT}`)
      .then(res => res.json())
      .then(res =>
        setFormData(res.data)
      )
  }, []);

  const fileInput = useRef(null);
  const personalInformation = [
    {
      title: "First Name",
      field: "personalInformation.firstName"
    },
    {
      title: "Last Name",
      field: "lastName"
    },
    {
      title: "Email",
      field: "email"
    },
    {
      title: "Phone Number",
      field: "phoneNumber"
    },
    {
      title: "Nationality",
      field: "nationality"
    },
    {
      title: "Current Residence",
      field: "currentResidence"
    },
    {
      title: "Id Number",
      field: "idNumber"
    },
    {
      title: "Date Of Birth",
      field: "dateOfBirth"
    },
    {
      title: "Gender",
      field: "gender"
    },
  ];
  const {
    register,
    handleSubmit,
    setValue,
    control,
    watch
  } = useForm<FormData>({ shouldUnregister: true, defaultValues: formData });

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'attributes.personalInformation.personalQuestions',
  });

  function onSubmit(data: FormData) {
    console.log("data", data);
  }

  const handleSaveClick = (index: number) => {
    const newEditModes = [...editModes];
    newEditModes[index] = false;
    setEditModes(newEditModes);
  };
  const personal_questions = watch("attributes.personalInformation.personalQuestions");

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>

      <div className='grid gap-12'>
        <FormCard title={'Upload cover image'}>
          <input type="file" className=' hidden' ref={fileInput} />
          <div
            //@ts-ignoretype
            onClick={() => fileInput.current.click()}
            className=' cursor-pointer m-10 p-4  md:p-10 border-2 border-dashed flex flex-col justify-center  items-center'>
            <UploadIcon
              width="30"
              height="40"
              fill='none' />
            <span className=' text-lg font-semibold'>upload cover image</span>
            <span className=' text-slate-500 text-sm'>16:9 ratio is recommended. Max image size 1mb</span>
          </div>
        </FormCard>
        <FormCard title='Personal Information'>
          <div className='px-4'>
            {personalInformation.map((fields, i) => (
              <div key={i} className=' w-full py-4 border-b border-border-200  last:border-b-0  '>
                <div className='w-full font-semibold  leading-10 flex items-center align-middle justify-between'>
                  <span>{fields.title}{fields.title === "Phone Number" &&
                    (<span className=' text-xs'>{" (widthout dial code)"}</span>)}</span>
                  {i > 2 && (
                    <div className='flex items-center space-x-4'>
                      <Checkbox
                        // @ts-ignore
                        {...register(`attributes.personalInformation.${fields.field}.internalUse`)}
                        label={"Internal"}
                        className="mb-5"
                      />
                      <Slider control={control} name={`attributes.personalInformation.${fields.field}.show`} />
                      <label className="ml-2 text-sm font-normal text-gray-500 ">{
                        //@ts-ignore
                        watch(`attributes.personalInformation.${fields.field}.show`)
                          ? "Show" : "Hide"}</label>
                    </div>
                  )}
                </div>
                {/* {
                personalInformation.length - 1 > i &&
                (<hr className="w-full h-[2px] bg-gray-100  my-2 " />)
              } */}
              </div>)
            )}
            <div>
              {fields.map(
                (item: FormQuestion & { id: string }, index: number) => (
                  <div
                    className="border-b border-border-200 py-4   last:border-b-0 "
                    key={item.id}
                  >
                    <div className={`px-4 md:px-8 space-y-4 md:space-y-8 ${editModes[index] ? "" : "hidden"}`}>
                      <div className=" space-y-2">
                        <label className=' text-sm font-semibold'>Type</label>
                        <SelectInput
                          name={`attributes.personalInformation.personalQuestions.${index}.type` as const}
                          control={control}
                          setValue={setValue}
                        />
                      </div>
                      <div className=' space-y-2'>
                        <label className=' text-sm font-semibold'>Question</label>
                        <input
                          className=" border-gray-300 rounded-md w-full p-3 focus:ring-0 focus:border-[#087B2F]"
                          {...register(`attributes.personalInformation.personalQuestions.${index}.question` as const)}
                        />
                      </div>
                      <div className='flex justify-between'>

                        <button
                          onClick={() => {
                            remove(index);
                            handleSaveClick(index);
                          }}
                          type="button"
                          className="flex items-center space-x-2 text-sm text-red-500 transition-colors duration-200 hover:text-red-700 focus:outline-none sm:col-span-1 sm:mt-4"
                        >
                          <CloseIcon width={24} height={24} />
                          <span>Delete Question</span>
                        </button>
                        <button type='button'
                          onClick={() => {
                            handleSaveClick(index)
                          }}
                          className=' bg-[#087B2F] py-1 px-3 hover:bg-[#308e4f] transition duration-200 rounded-md text-white text-sm'>
                          Save
                        </button>
                      </div>

                    </div>
                    <div className={` flex items-center ${!editModes[index] ? "" : "hidden"}`}>
                      <div className=' space-y-2 flex-auto'>
                        <span className=' block text-xs font-normal text-gray-500'>{personal_questions[index].type}</span>
                        <span className=' block font-semibold '>{personal_questions[index].question}</span>
                      </div>
                      <button
                        onClick={() => {
                          const newEditModes = [...editModes];
                          newEditModes[index] = true;
                          setEditModes(newEditModes);
                        }}
                        type="button"
                        className='p-4'
                      >
                        <EditIcon width={16} height={16} />
                      </button>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
          <button
            type="button"
            className='flex  my-4 justify-start items-center space-x-4 py-2.5 px-5 mx-2 mb-4 text-sm font-medium focus:outline-none  rounded-lg  hover:bg-gray-100 transition duration-200 '
            onClick={() => {
              append({
                id: "",
                type: "",
                question: "",
                choices: [
                ],
                maxChoice: 0,
                disqualify: false,
                other: false
              })
              const newEditModes = [...editModes];
              newEditModes[fields.length] = true;
              setEditModes(newEditModes);
            }}
          >
            <PlusIcon height={20} width={24} />
            <span className=' font-medium text-sm' >Add a question</span>
          </button>
        </FormCard>
      </div>
    </form>

  )
}

export default ApplicationForm