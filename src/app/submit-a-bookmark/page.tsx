"use client";
import "./page.css";
import { TextFieldComponent } from "../../components/TextInput";
import { useState } from "react";
import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";
import { addBookmark } from "../../store/slices/bookmarkSlice";
import { useRouter } from "next/navigation";

export default function SubmitALink() {
  const [formData, setFormData] = useState({
    name: "",
    url: "",
  });
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [urlError, setURLError] = useState<string>("");

  const dispatch = useDispatch();
  const router = useRouter(); 

  const validateURL = (url: string) => {
    if (url) {
      try {
        new URL(url);
        return "";
      } catch (e) {
        return "Incorrect URL";
      }
    } else {
      return "Please provide URL";
    }
  };

  const handleNameInputChange = (value: string) => {
    setFormData((prevData) => ({
      ...prevData,
      name: value,
    }));
  };

  const handleURLInputChange = (value: string) => {
    setFormData((prevData) => ({
      ...prevData,
      url: value,
    }));

    setURLError(validateURL(value));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const urlError = validateURL(formData.url);
    if(urlError){
      setURLError(urlError);
    } else {
      setSubmitted(true);
      dispatch(addBookmark({ name: formData.name, url: formData.url }));
 
    }
  };

  const returnToOverviewPage =() => {
    router.push("/");
  }

  return (
    <div className="page">
      {!submitted ? (
        <form onSubmit={handleSubmit} className="flex-col">
          Submit a bookmark
          <TextFieldComponent
            label="Bookmark name"
            value={formData.name}
            onChange={(value) => handleNameInputChange(value)}
          ></TextFieldComponent>
          <TextFieldComponent
            label="Bookmark url"
            value={formData.url}
            onChange={(value) => handleURLInputChange(value)}
            error={urlError}
          ></TextFieldComponent>
          <Button variant="contained" disableElevation type="submit">
            Submit
          </Button>
        </form>
      ) : (
        <div className="flex-col">
          <div>Thank you for submitting the bookmark:</div>
          {  formData.name && <div className="">{formData.name}</div> }
          <div className="">{formData.url}</div>
          <a onClick={returnToOverviewPage} href="#">Back to overiew</a>
        </div>
      )}
    </div>
  );
}
