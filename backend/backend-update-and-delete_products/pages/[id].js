import { useRouter } from "next/router";
import Product from "../components/Product";


export default function ProductDetailsPage() {
const router=useRouter();
const {id}=router.query;

  const handleEditProduct=async(event)=>{

//preventdefault
    //bring formdata here=newFormdata(event)

  }
  return (
    <>
      <Product  onSubmit={handleEditProduct}/>
    </>
  );
}
