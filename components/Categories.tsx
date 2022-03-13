import { FC, useEffect, useState } from 'react';
import Link from 'next/link';
import { getCategories } from '../services';

interface Category {
  name: string;
  slug: string;
}

const Categories: FC = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((result) => setCategories(result));
  }, []);
  return (
    <div className="mb-8 ml-8 rounded-lg bg-white p-8 pb-12 shadow-lg">
      <h3 className="mb-8 border-b pb-4 text-xl font-semibold">Categories</h3>
      {categories.map((category: Category) => (
        <Link href={`/category/${category.slug}`} key={category.slug}>
          <span className="mb-3 block cursor-pointer pb-3">{category.name}</span>
        </Link>
      ))}
    </div>
  );
};

export default Categories;
