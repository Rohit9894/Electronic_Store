import CheckoutItem from "@/components/miscellaneous/CheckoutItem";
import { Button } from "@/components/ui/button";
import { Separator } from "@radix-ui/react-select";

function Checkout() {
  return (
    <div className="container">
      <h1 className="text-3xl font-bold my-8">Shopping Cart</h1>
      <div className=" grid grid-cols-3 gap-8">
        <div className="col-span-4 md:col-span-2">
          <div className=" flex flex-col gap-8">
            <CheckoutItem />
            <CheckoutItem />
            <CheckoutItem />
            <CheckoutItem />
            <CheckoutItem />
            <CheckoutItem />
            <CheckoutItem />
            <CheckoutItem />
          </div>
        </div>
        <div className="  shadow-custom p-4 rounded-md h-max sticky top-24">
          <h1 className="text-lg  font-semibold">Shopping Summary</h1>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-zinc-600">Subtotal</span>
              <span className="font-medium">{9999}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-zinc-600">Shipping</span>
              <span className="font-medium">9999</span>
            </div>
            <div className="flex justify-between">
              <span className="text-zinc-600">Tax (7%)</span>
              <span className="font-medium">{9999}</span>
            </div>

            <Separator className="my-3" />

            <div className="flex justify-between text-lg font-bold">
              <span>Total</span>
              <span>{999}</span>
            </div>
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
