import './Link.css';

function Link(props) {
    return (
        <a
            className='App-link'
            href={props.url}
            target='_blank'
            rel='noopener noreferrer'
        >{props.title}</a>
    );
}

export default Link;