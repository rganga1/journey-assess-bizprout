import React from "react";
import { useForm } from "react-hook-form";

function updateJourney() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    
  });

  const onSubmit = (data) => console.log(data);

  return (
    <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
      abc
    </form>
  )
}

export default updateJourney