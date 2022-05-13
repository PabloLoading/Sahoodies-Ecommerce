import './LinkedTitle.css'

const LinkedTitle=(promps)=>{
    return (
        <li><a href={promps.target}>{promps.title}</a></li>
    )
}

export default LinkedTitle