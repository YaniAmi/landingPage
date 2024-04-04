import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";

export default function FormPage() {
  return (
    <div style={{ backgroundColor: "lightblue" }}>
      <Card color="transparant" shadow={false} style={{ alignItems: "center" }}>
        <form
          className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
          style={{ alignItems: "center" }}
        >
          <div className="mb-6 flex flex-col gap-6">
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Name
            </Typography>
            <Input
              size="lg"
              placeholder="your name"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              style={{
                marginBottom: "1rem",
                width: "100%",
                padding: "0.5rem",
                borderRadius: "0.25rem",
                border: "1px solid #ccc",
              }}
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Email
            </Typography>
            <Input
              size="lg"
              placeholder="name@mail.com"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              style={{
                marginBottom: "1rem",
                width: "100%",
                padding: "0.5rem",
                borderRadius: "0.25rem",
                border: "1px solid #ccc",
              }}
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              What do you use Floanalytics for?
            </Typography>
            <Input
              size="lg"
              placeholder="your input"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              style={{
                marginBottom: "1rem",
                width: "100%",
                padding: "0.5rem",
                borderRadius: "0.25rem",
                border: "1px solid #ccc",
              }}
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Criticism and Suggestions
            </Typography>
            <Input
              size="lg"
              placeholder="your input"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              style={{
                marginBottom: "1rem",
                width: "100%",
                padding: "0.5rem",
                borderRadius: "0.25rem",
                border: "1px solid #ccc",
              }}
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
          </div>
          <div
            style={{
              padding: "1rem",
              textAlign: "right",
            }}
          >
            <Button
              style={{
                width: "30%",
                color: "white",
                backgroundColor: "green",
              }}
            >
              Next
            </Button>
          </div>
        </form>
      </Card>
    </div>
  );
}
