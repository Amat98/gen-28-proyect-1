import './styles/QuoteBox.css'

const QuoteBox = ({ handleChange, quote }) => {
  return (
    <section>
      <h1>-FAMOUS QUOTES-</h1>

      <section className='container'>
        <article>
          <p>{quote.phrase}</p>
          <h4>{quote.author}</h4>
        </article>
      </section>
      <button onClick={handleChange}>Try Luck</button>
    </section>
  );
};

export default QuoteBox;
