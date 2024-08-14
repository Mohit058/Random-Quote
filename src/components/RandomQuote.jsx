import { useEffect, useState } from "react";
const RandomQuote = () => {
  let quotes = [];
  const [quote, setQuote] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadQuotes();
  }, []);

  async function loadQuotes() {
    const response = await fetch("https://type.fit/api/quotes");
    quotes = await response.json();
    let randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    setQuote(randomQuote);
    setIsLoading(false);
  }

  function handleClick() {
    loadQuotes();
  }

  return (
    <div className="place-self-center bg-slate-50 p-4 h-64 w-[450px] flex flex-col rounded-xl">
      <div className="text-2xl my-1 font-bold text-center">
        <div className="">Quote of the day</div>
        <div className="w-16 h-1 mx-auto bg-blue-500 border-0 rounded my-2 dark:bg-gray-700"></div>
      </div>
      {isLoading ? (
        <div className="place-self-center pt-5 grow lds-dual-ring"></div>
      ) : (
        <div className="justify-center px-3 grow">
          <div className="text-xl mt-5 font-semibold text-center">
            {quote.text}
          </div>
          <div className="text-base text-end mt-5 font-light italic">
            - {quote.author.split(",")[0]}
          </div>
        </div>
      )}
      <div className="flex">
        <button
          onClick={handleClick}
          className="text-white text-center bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-4 py-2 mx-auto mb-0"
        >
          New Quote
        </button>
      </div>
    </div>
  );
};

export default RandomQuote;
