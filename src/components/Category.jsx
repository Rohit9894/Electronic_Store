import { Link } from "react-router-dom";

function Category() {
  const category = [
    { id: 1, title: "All Categories", to: "/" },
    { id: 2, title: "Accessories", to: "/" },
    { id: 3, title: "Smartphone", to: "/" },
    { id: 4, title: "Laptop", to: "/laptop" },
    { id: 5, title: "Earphone", to: "/" },
    { id: 6, title: "Headphone", to: "/" },
    { id: 7, title: "SIM", to: "/" },
    { id: 8, title: "Bluetooth Speakers", to: "/" },
  ];

  return (
    <div className="w-full mt-5 overflow-x-auto hide-scrollbar">
      <div className="flex space-x-3 px-4 sm:px-6 md:justify-between">
        {category.map((item) => (
          <Link key={item.id} to={item.to}>
            <p className="text-muted bg-muted-foreground text-sm px-3 py-1 cursor-pointer rounded-lg whitespace-nowrap hover:bg-accent-foreground">
              {item.title}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Category;
