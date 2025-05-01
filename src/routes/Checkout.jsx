import CheckoutItem from "@/components/miscellaneous/CheckoutItem";
import { Button } from "@/components/ui/button";


function Checkout() {
  return (
    <div>
      <div className="container grid grid-cols-4 mt-10 gap-8">
        <div className="col-span-4 md:col-span-3">
          <div className="flex justify-between p-2.5 rounded-md shadow-custom">
            <div className="custom_center">
              <input className="size-3.5 cursor-pointer" type="checkbox" />
              <span className="ml-4">Select All</span>
            </div>
            <Button variant="destructive" className="">
              Remove
            </Button>
          </div>
          <div className="mt-8 flex flex-col gap-8">
            <CheckoutItem />
            <CheckoutItem />
            <CheckoutItem />
            <CheckoutItem />
          </div>
        </div>
        <div className=" col-span-4 shadow-custom p-4 rounded-md h-max">
          <h1 className="text-lg  font-semibold">Shopping Summary</h1>
          <div className="custom_center justify-between mt-6">
            <p className="font-semibold">Total</p>
            <h2 className="font-semibold text-background text-lg">₹ 1999 </h2>
          </div>
          <div className="flex justify-center flex-col items-center ">
            <Button className=" w-1/2  my-6">CHECKOUT</Button>
            <p className="text-center text-xs text-background">
              Back to Shopping
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
