import styles from '../styles/Home.module.css';

import { client } from '../lib/client';

export default function Home({ products, bannerData }) {
  console.log([products]);

  return (
    <div className="text-white">{products?.map((product) => product.name)}</div>
  );
}

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);
  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products, bannerData },
  };
};
