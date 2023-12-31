import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { useDispatch, useSelector } from "react-redux";
import { addNew, updateExisting } from "./features/journeySlice";

function UpdateJourney({ f: journey, f1: setIsUpdating }) {
  // console.log("journey in updateJourney", journey);
  const { jid, fromPlace, toPlace, fromdate, todate, cost } = journey;
  const inputclass =
    "py-3 px-4 block w-full rounded-md text-sm border-gray-500 focus:border-gray-800 text-gray-800";

  const journeyData = useSelector((state) => state.journeys.entities);
  const user = useSelector((state) => state.users.entities[1]);
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    setValue,
    setError,
    formState: { errors },
    reset,
    control,
  } = useForm({
    mode: "onTouched",
    defaultValues: {
      jid,
      fromPlace,
      toPlace,
      fromdate: fromdate.split("-").reverse().join("-"),
      todate: todate.split("-").reverse().join("-"),
      cost,
    },
  });

  const checkOverlap = ({ fromdate, todate }) => {
    //Validate for Date range:
    console.log("journeyData", journeyData);
    let journeyData1 = journeyData.filter((journey) => journey.jid != jid);
    const rangeStart1 = new Date(fromdate);
    const rangeEnd1 = new Date(todate);
    let isOverlapping = false;

    for (let journey of journeyData1) {
      // Convert date strings to Date objects
      // console.log('journey.fromdate', journey.fromdate)
      const rangeStart2 = new Date(
        journey.fromdate.split("-").reverse().join("-")
      );
      const rangeEnd2 = new Date(journey.todate.split("-").reverse().join("-"));
      // console.log("rangeStart2", rangeStart2);
      // console.log("rangeEnd2", rangeEnd2);
      if (
        (rangeStart1 <= rangeEnd2 && rangeStart2 <= rangeEnd1) ||
        (rangeStart2 <= rangeEnd1 && rangeStart1 <= rangeEnd2)
      ) {
        console.log("journey where overlapped", journey);
        isOverlapping = true;
        break;
      }
    }
    return isOverlapping;
  };

  const checkFinancialYear = (date) => {
    const rangeStart = new Date("2022-04-01");
    const rangeEnd = new Date("2023-03-31");
    // console.log(
    //   "date,date<=rangeEnd && date>=rangeStart",
    //   date,
    //   date <= rangeEnd && date >= rangeStart
    // );
    return date <= rangeEnd && date >= rangeStart;
  };
  const onSubmit = (data) => {
    const { fromdate, todate } = data;
    // console.log('data', data)
    if (todate < fromdate) {
      setError("todate", {
        message: "Error: End Date should be later than start date",
      });
    } else if (
      new Date(fromdate) <
      new Date(user.dateofjoining.split("-").reverse().join("-"))
    ) {
      setError("fromdate", {
        message: "Error: Date should be after joining date",
      });
    } else if (checkOverlap({ fromdate, todate })) {
      setError("fromdate", {
        message: "Error: Date shouldn't be within the range of past records",
      });
      setError("todate", {
        message: "Error: Date shouldn't be within the range of past records",
      });
      console.log("Overlapping error");
    } else {
      data.fromdate = fromdate.split("-").reverse().join("-");
      data.todate = todate.split("-").reverse().join("-");
      dispatch(updateExisting({ ...data, jid }));
      console.log("updating data", { ...data, jid });
      // setIsUpdating({ is: false, journey: null });
    }
  };

  useEffect(() => {
    reset({
      fromPlace: fromPlace,
      toPlace: toPlace,
      fromdate: fromdate.split("-").reverse().join("-"),
      todate: todate.split("-").reverse().join("-"),
      cost: cost,
    });
  }, [setValue, jid, fromPlace, toPlace, fromdate, todate, cost]);

  return (
    <>
      <h2 className="text-center text-lg font-bold underline m-4">
        Update Existing Journey
      </h2>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
        {/* From */}
        <div>
          <label className="block text-sm font-medium mb-2 dark:text-white">
            From
          </label>
          <div className="relative">
            <input
              type="text"
              {...register("fromPlace")}
              // className="py-3 px-4 block w-full border-red-500 rounded-md text-sm focus:border-red-500 focus:ring-red-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
              className={inputclass}
            />
          </div>
        </div>
        {/* To */}
        <div>
          <label
            htmlFor="to"
            className="block text-sm font-medium mb-2 dark:text-white">
            To
          </label>
          <div className="relative">
            <input
              {...register("toPlace")}
              type="text"
              id="to"
              className={inputclass}
            />
          </div>
        </div>
        {/* Dates */}
        <div className="flex justify-between flex-col lg:flex-row gap-4">
          <div>
            <label
              htmlFor="from-date"
              className="block text-sm font-medium mb-2 dark:text-white">
              Start Date
            </label>
            <div className="relative">
              <input
                type="date"
                id="from-date"
                {...register("fromdate", {
                  required: "This field is required",
                  validate: {
                    check1: (fieldValue) => {
                      // console.log('fieldValue', fieldValue)
                      return (
                        !checkFinancialYear(fieldValue) ||
                        "Error: Date should be within financial year"
                      );
                    },
                    // check2:(fieldValue)=>  !checkForJoinDate (fieldValue)||"Error: Date should be after the joining date"
                  },
                })}
                className={inputclass}
              />
            </div>
            <p className="text-sm text-red-600 mt-2">
              {errors.fromdate?.message}
            </p>
          </div>
          <div>
            <label
              htmlFor="to-date"
              className="block text-sm font-medium mb-2 dark:text-white">
              End Date
            </label>
            <div className="relative">
              <input
                type="date"
                id="to-date"
                {...register("todate", {
                  required: "This field is required",
                  validate: {
                    check1: (fieldValue) => {
                      // console.log('fieldValue', fieldValue)
                      return (
                        !checkFinancialYear(fieldValue) ||
                        "Error: Date should be within financial year"
                      );
                    },
                  },
                })}
                className={inputclass}
              />
            </div>
            <p className="text-sm text-red-600 mt-2">
              {errors.todate?.message}
            </p>
          </div>
        </div>

        {/* Cost */}
        <div>
          <label
            htmlFor="cost"
            className="block text-sm font-medium mb-2 dark:text-white">
            Cost
          </label>
          <div className="relative">
            <input
              id="cost"
              {...register("cost", {
                required: "This field is required",
                validate: (value) => value > 0 || "Cost should be positive",
              })}
              type="number"
              className={inputclass}
            />
          </div>
          <p className="text-sm text-red-600 mt-2">{errors.cost?.message}</p>
        </div>
        {/* Choose File */}
        <div>
          <div className="relative">
            <input
              type="file"
              id="to"
              // className="py-3 px-4 block w-full border-green-500 rounded-md text-sm focus:border-green-500 focus:ring-green-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
              {...register("file", {
                validate: (file) => {
                  if (file[0]) {
                    return (
                      file[0]?.size <= 2 * 1024 * 1024 ||
                      "File size exceeds the allowed limit of 2MB"
                    );
                  } else return true;
                },
              })}
            />
          </div>
        </div>
        <input
          type="submit"
          className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
          value={"Save"}
        />
        <button
          onClick={() => setIsUpdating({ is: false, journey: null })}
          className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-gray-500 text-white hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800">
          Add new
        </button>
        <DevTool control={control} />
      </form>
    </>
  );
}

export default UpdateJourney;
