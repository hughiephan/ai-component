"use client";

import * as React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

const TryOn = () => {
  const [modelPreview, setModelPreview] = React.useState(
    "https://fptvton.s3.ap-southeast-2.amazonaws.com/white.jpg"
  );
  const [clothPreview, setClothPreview] = React.useState(
    "https://fptvton.s3.ap-southeast-2.amazonaws.com/white.jpg"
  );
  const [modelImageUrl, setModelImageUrl] = React.useState("");
  const [clothImageUrl, setClothImageUrl] = React.useState("");

  const handleImageChange = (event, setPreview, setUrl) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setPreview(reader.result);
        setUrl(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSampleClick = (src, setPreview, setUrl) => {
    setPreview(src);
    setUrl(src);
  };

  return (
    <main className="flex flex-col items-center justify-center p-6">
      <Card className="w-full max-w-2xl">
        <CardContent>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Upload Model Image:
              </label>
              <Input
                type="file"
                accept="image/*"
                onChange={(e) => handleImageChange(e, setModelPreview, setModelImageUrl)}
                className="mt-1 block w-full"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Upload Cloth Image:
              </label>
              <Input
                type="file"
                accept="image/*"
                onChange={(e) => handleImageChange(e, setClothPreview, setClothImageUrl)}
                className="mt-1 block w-full"
              />
            </div>

            <Button type="submit" className="w-full">
              Upload and Try-On
            </Button>
          </form>
        </CardContent>

        <CardFooter className="flex flex-col gap-6 mt-6">
          <div className="text-center flex justify-between gap-4">
            <h2 styleclassName="text-sm font-semibold mb-2">Sample images:</h2> 
            {["https://fptvton.s3.ap-southeast-2.amazonaws.com/static/model/00135_00.jpg", "https://fptvton.s3.ap-southeast-2.amazonaws.com/static/model/00151_00.jpg", "https://fptvton.s3.ap-southeast-2.amazonaws.com/static/model/00828_00.jpg"].map((src, idx) => (
              <img
                style={{ width: "200px", "height": "200px" }}
                key={idx}
                src={src}
                alt={`Sample Model ${idx + 1}`}
                onClick={() => handleSampleClick(src, setModelPreview, setModelImageUrl)}
                className="cursor-pointer rounded-md border border-transparent hover:border-blue-500"
              />
            ))}

            <div className="text-center">
              <h2 className="text-sm font-semibold mb-2">Cloth Image Preview:</h2>
              <img
                style={{ width: "200px", "height": "200px" }}
                src={clothPreview}
                alt="Cloth Preview"
                className="rounded-lg w-full"
              />
            </div>
          </div>

          
          <div className="flex grid-cols-2 gap-4">
            <div className="text-center">
              <h2 className="text-sm font-semibold mb-2">Model Image Preview:</h2>
              <img
                style={{ maxWidth: "500px" }}
                src={modelPreview}
                alt="Model Preview"
                className="rounded-lg w-full"
              />
            </div>

            
          </div>
        </CardFooter>
      </Card>
    </main>
  );
};

export default TryOn;
