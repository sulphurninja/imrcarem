import Image from "next/image";
import { urlFor } from "../sanity";
import { removeFromBasket } from "../redux/basketSlice";
import { useDispatch } from "react-redux";

interface Props {
  items: Product[];
  id: string;
}

function CheckoutProduct({ id, items }: Props) {
  const dispatch = useDispatch();

  const removeItemFromBasket = () => {
    dispatch(removeFromBasket({ id }));
  };

  console.log(items[0].title)
  return (
  
    <div className="flex flex-col gap-x-4 border-b border-gray-300 pb-5 lg:flex-row lg:items-center">
      <div className="relative h-44 w-44">
        <Image
          src={urlFor(items[0].image[0]).url()}
          layout="fill"
          alt="wow"
        />
      </div>

      <div className="flex flex-1 items-end lg:items-center">
        <div className="flex-1 space-y-4">
          <div className="flex flex-col gap-x-8 text-xl lg:flex-row lg:text-2xl">
            <h4 className="font-semibold lg:w-96">{items[0].title}</h4>
            <p className="flex items-end gap-x-1 font-semibold">
              {items.length}
             
            </p>
          </div>

          <p className="flex cursor-pointer items-end text-blue-500 hover:underline">
         
          </p>
        </div>
        <div className="flex flex-col items-end space-y-4">
          <h4 className="text-xl font-semibold lg:text-2xl">
           
          </h4>
          <button
            onClick={removeItemFromBasket}
            className="text-blue-500 hover:underline"
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}

export default CheckoutProduct;
