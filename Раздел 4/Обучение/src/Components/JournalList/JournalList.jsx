import './JournalList.css';

function JounalList({ children }) {
    
    return (
        <div className='journal-list'>
            {children}
        </div>
    );
}

export default JounalList;