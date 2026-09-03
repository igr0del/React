import './Paragraph.css';

function Paragraph({ children, fontSize = 16 }) {
  return (
    <p
      className="paragraph"
      style={{ fontSize: `${fontSize}px` }}
    >
      {children}
    </p>
  );
}

export default Paragraph;