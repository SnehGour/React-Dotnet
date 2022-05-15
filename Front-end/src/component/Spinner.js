import spinner from '../spinner.gif'

const Spinner = () => {
    return (
        <div className='spinner-container'><img className='spinner' src={spinner} alt='loading' /></div>
    )
}


export default Spinner