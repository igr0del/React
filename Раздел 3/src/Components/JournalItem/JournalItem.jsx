import './JournalItem.css';

function JournalItem() {
    return (
        <div className="journal-item">
            <h2 className="journal-item__header">1</h2>
            <h2 className="journal-item__body">
                <div className="journal-item__data">date</div>
                <div className="journal-item__text">text</div>
            </h2>
        </div>
    );
}

export default JournalItem;