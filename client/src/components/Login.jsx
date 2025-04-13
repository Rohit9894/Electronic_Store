import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { useForm } from "react-hook-form";
import { login } from "@/api/authApi";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";

function Login() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const { toast } = useToast();
  const navigate = useNavigate();
  async function formSubmit(data) {
    try {
      const res = await login(data);

      if (res?.msg == "Login successfully") {
        toast({
          title: "✅ Login successfully!",
          duration: 3000,
        });
        return navigate("/", { replace: true });
      }
    } catch (err) {
      if (err?.msg == "Invalid credetials") {
        toast({
          variant: "destructive",
          title: "Your username or password may be incorrect!",
          duration: 3000,
        });
      } else {
        console.log(err);
      }
    }
  }

  return (
    <Card className="bg-white/30 backdrop-blur-md">
      <CardHeader>
        <CardTitle>Login</CardTitle>
        <CardDescription>
          Log in for seamless access to your orders, wishlist, and tailored
          recommendations.
        </CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit(formSubmit)}>
        <CardContent className="space-y-2">
          <div className="space-y-1">
            <Label htmlFor="email">Eamil</Label>
            <Input
              {...register("email", {
                required: "Email is required!",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "Invalid Email",
                },
              })}
              id="email"
            />
            <span className="text-destructive text-sm">
              {errors.email?.message}
            </span>
          </div>
          <div className="space-y-1">
            <Label htmlFor="password">Password</Label>
            <Input
              {...register("password", {
                required: "Password is required!",
                minLength: {
                  value: 8,
                  message: "Password must be more than 4 characters",
                },
                maxLength: {
                  value: 20,
                  message: "Password cannot exceed 20 characters",
                },
              })}
              id="password"
            />
            <span className="text-destructive text-sm">
              {errors.password?.message}
            </span>
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full">Create Account</Button>
        </CardFooter>
      </form>
    </Card>
  );
}

export default Login;
