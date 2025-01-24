import Form from "next/form";
import SearchFormReset from "./SearchFormReset";
import { Search } from "lucide-react";
const SearchForm = ({ query }: { query?: string }) => {
  return (
    <Form action="/" scroll={false} className="search-form">
      <input
        name="query"
        defaultValue={query}
        className="search-input"
        placeholder="Search Startups"
      />
      <div className="flex gap-2">
        {query && <SearchFormReset />}
        <button
          name="submit"
          title="submit"
          type="submit"
          className="search-btn text-white"
        >
          <Search className="size-5" />
        </button>
      </div>
    </Form>
  );
};

export default SearchForm;
