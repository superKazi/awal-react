import { Article } from "../result-article/Article";
import "./results.css";

function Results({ breeds }) {
  return (
    <main className="results" aria-live="polite">
      {!breeds.length ? (
        <h2 className="results__none">
          No matching breed found. Try searching for a different breed.
        </h2>
      ) : (
        <ol className="results__grid" role="list">
          {breeds.map((breed) => (
            <li className="results__item" key={breed.name}>
              <Article breed={breed} />
            </li>
          ))}
        </ol>
      )}
    </main>
  );
}

export { Results };
