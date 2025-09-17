import React from "react";
import { useForm } from "react-hook-form";
import { Form } from "react-router-dom";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z.object({
  email: z.string().min(1),
  phone: z.string(),
  firstName: z.string(),
  lastName: z.string(),
  address: z.string(),
  apartment: z.string(),
  city: z.string(),
  state: z.string(),
  zipcode: z.string(),
});
function Checkout() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      phone: "",
      firstName: "",
      lastName: "",
      address: "",
      apartment: "",
      city: "",
      state: "",
      zipcode: "",
    },
  });
  const onSubmit = (data) => {
    console.log("Submitted Data:", data);
  };
  return (
    <div className="container px-4  py-8 mx-auto md:px-6 md:py-12">
      <h1 className="text-3xl font-bold mb-8">Checkout</h1>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        <div className="md:col-span-2">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
            ></form>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
