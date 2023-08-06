import { useSWR } from "swr";
import { getProductById } from "../../services/productServices";

const fetcher = (url) => fetch(url).then((r) => r.json());

export default function Product() {
  const { data } = useSWR("api/products", fetcher);

  return (
    <div>
      {data.map((product) => (
        <li key={product.id}>
          <h2>{product.name}</h2>
        </li>
      ))}
    </div>
  );
}
