
const Stepper = () => {
    const triangleStyle = {
        width: '0',
        height: '0',
        borderTop: '15px solid transparent',
        borderBottom: '15px solid transparent',
        borderLeft: '15px solid #115E59'
    };
    return (
        <div className="w-full shadow-xl my-20 flex text-center items-center">
            <div className=' p-6 flex-1'>
                <span>Program Detail</span>
            </div>
            <div className=' bg-teal-800 p-6 flex-1 relative text-white'>
                <span>Application Form</span>
                <div style={triangleStyle} className=' absolute top-6 -right-3'></div>
            </div>
            <div className=' flex-1'>
                <span>Workflow</span>
            </div>
            <div className=' flex-1'>
            <div className='border-l-2 p-3 border-gray-300'>
                <span>Preview</span>
            </div>
            </div>
        </div>
    );
}

export default Stepper