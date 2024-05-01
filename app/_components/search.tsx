<<<<<<< HEAD
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { SearchIcon } from "lucide-react";
=======
import { SearchIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
>>>>>>> 36dcfb804cc828ef9b62df4113af7e9cb875692f

const Search = () => {
  return (
    <div className="flex gap-2">
<<<<<<< HEAD
      <Input
        placeholder="Buscar restaurantes"
        className="border-none bg-gray-100"
      />
=======
      <Input placeholder="Buscar restaurantes" className="border-none" />
>>>>>>> 36dcfb804cc828ef9b62df4113af7e9cb875692f
      <Button size="icon">
        <SearchIcon size={20} />
      </Button>
    </div>
  );
};

export default Search;
