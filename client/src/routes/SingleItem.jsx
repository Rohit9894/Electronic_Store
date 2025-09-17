import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, ShoppingCart, Heart, Share2, Truck, Shield, RotateCcw } from "lucide-react";

const ProductDetails = () => {
  const product = {
    name: "Acer Aspire 3 Intel Celeron Dual Core",
    description: "8 GB/128 GB SSD/Windows 11 Home A311-45 Thin and Light Laptop 11.6 inch, Steel Grey, 1.0 kg",
    price: 14990,
    discountPercent: 30,
    brand: "Acer",
    stock: 0,
    images: [
      "https://rukminim2.flixcart.com/image/312/312/xif0q/computer/t/i/e/15-g9-thin-and-light-laptop-hp-original-imah9h2gc9hyn5xg.jpeg?q=70"
    ],
    ratings: {
      avgNumber: 5
    },
    specification: [
      {
        key: "Processor",
        value: "Intel Celeron Dual Core"
      },
      {
        key: "RAM",
        value: "8 GB"
      },
      {
        key: "Storage",
        value: "128 GB SSD"
      },
      {
        key: "OS",
        value: "Windows 11 Home"
      }
    ]
  };

  const originalPrice = product.price / (1 - product.discountPercent / 100);
  const savings = originalPrice - product.price;

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Product Image Section */}
          <div className="space-y-4">
            <div className="aspect-square bg-card rounded-lg border overflow-hidden">
              <img
                src={product.images[0]}
                alt={product.name}
                className="w-full h-full object-contain hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" className="flex items-center gap-2">
                <Heart className="w-4 h-4" />
                Wishlist
              </Button>
              <Button variant="outline" size="sm" className="flex items-center gap-2">
                <Share2 className="w-4 h-4" />
                Share
              </Button>
            </div>
          </div>

          {/* Product Info Section */}
          <div className="space-y-6">
            <div>
              <Badge variant="secondary" className="mb-2">{product.brand}</Badge>
              <h1 className="text-3xl font-bold text-foreground mb-2">{product.name}</h1>
              <p className="text-muted-foreground">{product.description}</p>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < product.ratings.avgNumber
                        ? "fill-gold text-gold"
                        : "text-muted-foreground"
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">
                ({product.ratings.avgNumber}/5)
              </span>
            </div>

            {/* Price */}
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <span className="text-3xl font-bold text-foreground">
                  ₹{product.price.toLocaleString()}
                </span>
                <span className="text-lg text-muted-foreground line-through">
                  ₹{Math.round(originalPrice).toLocaleString()}
                </span>
                <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
                  {product.discountPercent}% OFF
                </Badge>
              </div>
              <p className="text-sm text-green-600">
                You save ₹{Math.round(savings).toLocaleString()}
              </p>
            </div>

            {/* Stock Status */}
            <div>
              {product.stock === 0 ? (
                <Badge variant="destructive" className="text-sm">
                  Out of Stock
                </Badge>
              ) : (
                <Badge className="bg-green-100 text-green-800 hover:bg-green-100 text-sm">
                  In Stock ({product.stock} left)
                </Badge>
              )}
            </div>

            {/* Specifications */}
            <Card className="p-4">
              <h3 className="font-semibold mb-3">Specifications</h3>
              <div className="space-y-2">
                {product.specification.map((spec, index) => (
                  <div key={index} className="flex justify-between py-1">
                    <span className="text-muted-foreground">{spec.key}:</span>
                    <span className="font-medium">{spec.value}</span>
                  </div>
                ))}
              </div>
            </Card>

            {/* Action Buttons */}
            <div className="space-y-3">
              <Button
                size="lg"
                className="w-full"
                disabled={product.stock === 0}
              >
                <ShoppingCart className="w-5 h-5 mr-2" />
                {product.stock === 0 ? "Notify When Available" : "Add to Cart"}
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="w-full"
                disabled={product.stock === 0}
              >
                Buy Now
              </Button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-3 gap-4 pt-4 border-t">
              <div className="text-center">
                <Truck className="w-6 h-6 mx-auto mb-2 text-primary" />
                <p className="text-xs text-muted-foreground">Free Delivery</p>
              </div>
              <div className="text-center">
                <Shield className="w-6 h-6 mx-auto mb-2 text-primary" />
                <p className="text-xs text-muted-foreground">1 Year Warranty</p>
              </div>
              <div className="text-center">
                <RotateCcw className="w-6 h-6 mx-auto mb-2 text-primary" />
                <p className="text-xs text-muted-foreground">7 Days Return</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;