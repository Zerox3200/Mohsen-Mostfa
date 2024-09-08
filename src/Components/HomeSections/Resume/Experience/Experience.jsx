import './Experience.scss';

export default function Experience({ JopDesc, CompanyName, Date, turn }) {
    return (
        <div className='Experience'>
            <h2 className='h5'>{JopDesc}</h2>
            <p>{Date}</p>
            <span>{CompanyName}</span>
            <ul>
                {turn.map((ele, index) => <li key={index}>{ele}</li>)}
            </ul>
        </div>
    )
}
