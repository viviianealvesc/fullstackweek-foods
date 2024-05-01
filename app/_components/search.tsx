import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { SearchIcon } from "lucide-react";

const Search = () => {
  return (
    <div className="flex gap-2">
      <Input
        placeholder="Buscar restaurantes"
        className="border-none bg-gray-100"
      />
      <Button size="icon" className="bg-red-600">
        <SearchIcon size={20} />
      </Button>
    </div>
  );
};

export default Search;
