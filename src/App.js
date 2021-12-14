import "./App.css";
import React, { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import Input from "./components/ui/input-field/Input";
import FieldBox from "./components/ui/field-box/FieldBox";
import Select from "./components/ui/select/Select";
import FileUpload from "./components/ui/file-upload/File-upload";
import Label from "./components/ui/Label/Label";
import Textarea from "./components/ui/textarea/Textarea";
import { useForm } from "react-hook-form";

function App() {

  // form validation rules
  const validationSchema = Yup.object().shape({
    productName: Yup.string().required("Product name is required"),
    accessories: Yup.string().required("Please select accessories"),
    productMaterial: Yup.string().required("Product material is required"),
    productColour: Yup.string().required("Product colour is required"),
    productQuantity: Yup.string()
      .required("Quantity is required")
      .matches(/^[0-9]+$/, "Must be a number"),
    productFunctionality: Yup.string().required("Product Functionality is required"),
    productSample: Yup.string().required("Sample is required"),
    productTimeline: Yup.string().required("Timeline is required"),
    productCertification: Yup.string().required("Certification is required"),
    productAddInfo: Yup.string().required('The additional Information is required'),
    weight: Yup.string().required("Product weight is required"),
    size: Yup.string()
      .required("Size is a required")
      .matches(/^[0-9]+$/, "Must be only digits"),
    price: Yup.string()
      .required("Price is a required")
      .matches(/^(\d*([.,](?=\d{3}))?\d+)+((?!\2)[.,]\d\d)?$/, "Invalid price"),
    file: Yup.mixed().required()
  });

  const formOptions = { resolver: yupResolver(validationSchema) };

  // get functions to build form with useForm() hook
  const { register, handleSubmit, setError, formState } = useForm(formOptions);
  const { errors, isSubmitting } = formState;

  //Submitting if validations are passed
  const onSubmit = function (data) {
    console.log(data);
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className="flex-container row">
          <div className="flex-item column">
            {/* Basic Information block */}

            <FieldBox className="flex-item">
              <Label value="Basic Information"></Label>
              <Input
                required="{true}"
                placeholder="Name"
                name="productName"
                validation={register("productName")}
              />
              <span className="invalid-feedback">
                {errors.productName?.message}
              </span>

              <Select name="accessories" validation={register("accessories")}>
                <option value="" disabled hidden>
                  Accessories
                </option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </Select>
              <span className="invalid-feedback">
                {errors.accessories?.message}
              </span>
            </FieldBox>

            {/* Product Specification block */}

            <FieldBox className="flex-item">
              <Label value="Product Specification"></Label>

              <Input
                placeholder="Product Size"
                text=""
                validation={register("size")}
              />
              <span className="invalid-feedback">{errors.size?.message}</span>

              <Input
                placeholder="Product Weight"
                text=""
                validation={register("weight")}
              />
              <span className="invalid-feedback">{errors.weight?.message}</span>

              <Input
                placeholder="Product Material"
                text=""
                validation={register("productMaterial")}
              />
              <span className="invalid-feedback">
                {errors.productMaterial?.message}
              </span>

              <Input
                placeholder="Product Colour"
                text=""
                validation={register("productColour")}
              />
              <span className="invalid-feedback">
                {errors.productColour?.message}
              </span>
            </FieldBox>
          </div>

          <div className="flex-item">
            {/* Product Functionality block */}

            <FieldBox>
              <Label value="Product Functionality"></Label>

              <Input
                placeholder="Quantity"
                text=""
                validation={register("productQuantity")}
              />
              <span className="invalid-feedback">
                {errors.productQuantity?.message}
              </span>

              <Input
                placeholder="Product functionality"
                text=""
                validation={register("productFunctionality")}
              />
              <span className="invalid-feedback">
                {errors.productFunctionality?.message}
              </span>
              <Input
                placeholder="Sample"
                text=""
                validation={register("productSample")}
              />
              <span className="invalid-feedback">
                {errors.productSample?.message}
              </span>
              <Input
                placeholder="Timeline"
                text=""
                validation={register("productTimeline")}
              />
              <span className="invalid-feedback">
                {errors.productTimeline?.message}
              </span>
              <Input
                placeholder="Certification"
                text=""
                validation={register("productCertification")}
              />
              <span className="invalid-feedback">
                {errors.productCertification?.message}
              </span>
              <Input
                placeholder="Price Point"
                text=""
                validation={register("price")}
              />
              <span className="invalid-feedback">{errors.price?.message}</span>
            </FieldBox>
          </div>

          <div className="flex-item">
            {/* Additional Informations block */}
            <FieldBox>
              <Label value="Additional Informations"></Label>
              <Textarea
                placeholder="Additional Information..."
                validation={register("productAddInfo")}
              ></Textarea>
              <span className="invalid-feedback">
                {errors.productAddInfo?.message}
              </span>
              <br></br>

              <FileUpload validation={register("file")} />
            </FieldBox>
            <button className="btn" type="submit">
              Next
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default App;
