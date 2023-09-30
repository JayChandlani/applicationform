import ApplicationForm from './ApplicationForm'
import Stepper from './Stepper'

const Application = () => {
    return (
        <div className=" mx-auto h-full min-h-screen md:pl-[72px] top-14 md:top-0 ">
            <Stepper />
            <div className='mx-auto grid max-w-[1100px] gap-10 p-4 md:p-6 lg:grid-cols-[1fr_380px]'>
                <ApplicationForm />
            </div>
        </div>
    )
}

export default Application