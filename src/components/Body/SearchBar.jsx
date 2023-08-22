import './searchBar.css';
import _ from 'lodash';

const SearchBar = ({
  handleSort,
  listOfResturants,
  setFiltredResturants,
  searchTerm,
  SetSearchTerm,
}) => {
  const handleSearch = (event) => {
    SetSearchTerm(event.target.value);
  };

  const handleSubmit = () => {
    const filtredRes = listOfResturants.filter((res) =>
      res.info.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFiltredResturants(filtredRes);
  };

  const handleReset = () => {
    setFiltredResturants([]);
    SetSearchTerm('');
  };

  return (
    <div className="search-container">
      <div className="form-container">
        <form className="form">
          <button>
            <svg
              width="17"
              height="16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-labelledby="search"
            >
              <path
                d="M7.667 12.667A5.333 5.333 0 107.667 2a5.333 5.333 0 000 10.667zM14.334 14l-2.9-2.9"
                stroke="currentColor"
                strokeWidth="1.333"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </button>
          <input
            className="input"
            placeholder="Search for resturants..."
            required
            type="text"
            value={searchTerm}
            onChange={(event) => handleSearch(event)}
            onKeyDown={(event) => handleSubmit(event)}
          />
          <button
            className="reset"
            type="reset"
            onClick={handleReset}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </form>
      </div>
      <div className="filter-Btn-Container">
        <button
          className="bottone1"
          onClick={(event) => {
            handleSort(event);
          }}
        >
          Top Rated
        </button>
        <button
          className="bottone1"
          onClick={(event) => {
            handleSort(event);
          }}
        >
          Delivery Time
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
