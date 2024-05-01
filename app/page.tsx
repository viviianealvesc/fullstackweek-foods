import Search from "./_components/search";
import Header from "./_components/header";
import Image from "next/image";
import CategoryList from "./_components/category-list";

const Home = () => {
  return (
    <>
      <Header />

      <div className="px-5 pt-4">
        <Search />
      </div>

     <div className="px-5 pt-6">
       <CategoryList />
     </div>

     <div className="px-5 pt-6">
         <Image src="/promo-banner-01.png" alt="Até 30% de descontos em pizzas" height={0} width={0}
            className="h-auto w-full object-contain" sizes="100vw" quality={100} />
     </div>
    
   </>
   );
};

export default Home;
