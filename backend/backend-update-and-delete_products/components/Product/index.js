import useSWR from "swr";
import { useRouter } from "next/router";
import { ProductCard } from "./Product.styled";
import { StyledLink } from "../Link/Link.styled";
import Comments from "../Comments";
import { useState } from "react";

export default function Product({onSubmit}) {
  const { mutate } = useSWR("/api/products");
  const router = useRouter();
  const { id } = router.query;

  const { data, isLoading } = useSWR(`/api/products/${id}`);
  const [isEditMode, setIsEditMode] = useState(false);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!data) {
    return;
  }
  console.log("data", data);
  async function handleEditProduct(event) {
    event.preventDefault();
    const formData = new formData(event.target);
    const productData = Object.fromEntries(formData);

    const response = await fetch(`/api/products/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(productData),
    });
    if (response.ok) {
      mutate();
    }
  }

  return (
    <ProductCard>
      {isEditMode && (
        <button
          type="button"
          onClick={() => {
            setIsEditMode(!isEditMode);
          }}
        >
          BuTtOn
        </button>
      )}
      {isEditMode && <ProductForm onSubmit={handleEditProduct} />}
      <h2>{data.name}</h2>
      <p>Description: {data.description}</p>
      <p>
        Price: {data.price} {data.currency}
      </p>
      {data.reviews.length > 0 && <Comments reviews={data.reviews} />}
      <StyledLink href="/">Back to all</StyledLink>
    </ProductCard>
  );
}
