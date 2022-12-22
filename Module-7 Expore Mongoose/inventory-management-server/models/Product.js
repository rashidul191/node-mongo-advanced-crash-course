const mongoose = require("mongoose");
// schema design of a model
const productSchema = mongoose.Schema(
  {
    // name:String
    name: {
      type: String,
      // required:true,
      // hereProperty :[value, "error message"]
      required: [true, "Please provide a name for this product."],
      trim: true, // remove extra space of product name
      // unique: true,
      minLength: [3, "Name must be a last 3 characters."],
      maxLength: [100, "Name is too large."],
    },

    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
      min: [0, "Price can't be negative"],
    },

    quantity: {
      type: Number,
      required: true,
      min: [0, "Quantity can't negative"],
      // check quantity validate
      validate: {
        validator: (value) => {
          const isInteger = Number.isInteger(value);
          if (isInteger) {
            return true;
          } else {
            return false;
          }
        },
      },
      message: "Quantity must be an integer",
    },

    unit: {
      type: String,
      required: true,
      //enum: ["kg", "liter", "pcs"], // before we know about this name so we are call "enum"
      enum: {
        values: ["kg", "litre", "pcs"],
        message: `Unit value can't be {VALUE} must be kg/litre/pcs`,
      },
    },

    status: {
      type: String,
      required: true,
      // enum: ["in-stock", "out-of-stack", "discontinued"],
      enum: {
        values: ["in-stock", "out-of-stack", "discontinued"],
        message: "Status can't be {VALUE}", // give user value = {VALUE}
      },
    },

    /*  supplier: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Supplier Model",
      }, */
    // categories array of object
    /*   categories: [
        {
          name: {
            type: String,
            required: true,
          },
          _id: mongoose.Schema.Types.ObjectId,
        },
      ], */

    // custom define date
    // createAt: {
    //   type: Date,
    //   default: Date.now, // if user can't give the date, so it is create default
    // },
    // updateAt: {
    //   type: Date,
    //   default: Date.now, // if user can't give the date, so it is create default
    // },
  },
  // default get date mongoose
  { timestamps: true }
);

// mongoose middleware for saving data: per / post
// per mongoose middleware
productSchema.pre("save", function (next) {
  console.log("before saving data");
  // this
  if (this.quantity === 0) {
    this.status = "out-of-stock";
  }
  next();
});

// post mongoose middleware
// productSchema.post("save", function (doc, next) {
//   console.log("after saving data");
//   next();
// });

// customizing function (optional)
productSchema.methods.logger = function () {
//   console.log(`Data saved for ${this.name}`);
};

// SCHEMA ==> MODEL ==> QUERY
// Model design
const Product = mongoose.model("Product", productSchema);

 module.exports = Product
