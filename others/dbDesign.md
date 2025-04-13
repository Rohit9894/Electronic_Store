**Bkg Database Design**

<!-- 1 . User :  -->
{
firstName : string ,
lastName : string ,
email : string ,
password : string,
addressIds : [ObjectId],
phoneNumber : string,
profilePhoto : stirng,
role : ["user", "admin", "super_admin"],
}

--------------------------------------------------------------------

<!-- 2 . Address :  -->
{
steet : string ,
Landmark : string,
Distt : string ,
State : string,
pinCode : string ,
addressType: [office , Home]
}

<!-- 3 . Category : -->
{
name: String, 
description: String,
categogyId:Object Id ,
parentCategoryId: ObjectId, // Reference to another category if subcategory
}

<!-- 4 . Product : -->
{
   _id: ObjectId,
   name: String,
   description: String,
   price: Number,
   categoryId: ObjectId, // Reference to Categories collection
   brand: String,
   stock: Number,
   images: [String], // Array of image URLs
   ratings: {
      avgRating: Number,
      totalReviews: Number
   },
}

<!-- 4 . Cart : -->
{
    userId:objectId,
    items: [
      {
         productId: ObjectId, // Reference to Products collection
         quantity: Number
      }
   ],

}

<!-- 5 . Order : -->
{
   _id: ObjectId,
   userId: ObjectId, // Reference to Users collection
   items: [
      {
         productId: ObjectId, // Reference to Products collection
         quantity: Number,
         price: Number
      }
   ],
   totalAmount: Number,
   status: {
      type: String,
      enum: ["pending", "shipped", "delivered", "cancelled"],
      default: "pending"
   },
   shippingAddress: {
      street: String,
      city: String,
      state: String,
      zip: String,
      country: String
   },
   paymentMethod: {
      type: String,
      enum: ["credit_card", "debit_card", "paypal", "cod"],
      default: "cod"
   },
   createdAt: { type: Date, default: Date.now },
   updatedAt: Date
}


