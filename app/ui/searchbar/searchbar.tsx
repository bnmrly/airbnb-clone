"use client";

// if i want this to be a server component - can it though as uses query strings etc??? - see this - https://stackoverflow.com/questions/76181096/typeerror-createcontext-only-works-in-client-components-add-the-use-client-d

import React from "react";
import styles from "./searchbar.module.css";
import SearchIcon from "@material-ui/icons/Search";

interface Stay {
  city: string;
  country: string;
  superHost: boolean;
  title: string;
  rating: number;
  maxGuests: number;
  type: string;
  beds: number;
  photo: string;
}

export const SearchBar = ({ staysData }: { staysData: Stay[] }) => {
  const totalGuestNumber = 0;
  const childGuestNumber = 5;
  const adultGuestNumber = 2;

  // needs filter drawer visible stuff
  return (
    <>
      <div className={styles["container"]}>
        <form>
          <div className={styles["input-container"]}>
            <input
              className={`${styles["input"]} ${styles["input--location"]}`}
              type="text"
              readOnly
              name="location"
              id="searchFilter"
              placeholder="Helsinki, Finland"
              // value={locationSearchOption}
              value="Helsinki, Finland"
              // onClick={handleOpenLocationFilterChange}
            />
            <div
              className={styles["guests-container"]}

              // onClick={handleOpenGuestFilterChange}
            >
              {totalGuestNumber < 1
                ? "Add Guests"
                : `${totalGuestNumber} guests`}
            </div>
            <input
              type="hidden"
              // ref={guestSearchInput}
              name="guests"
              readOnly
              value={totalGuestNumber}
            />
            <input
              type="hidden"
              // ref={guestSearchInput}
              name="children"
              readOnly
              value={childGuestNumber}
            />
            <input
              type="hidden"
              // ref={guestSearchInput}
              name="adults"
              readOnly
              value={adultGuestNumber}
            />
            <button
              className={styles["submit-button"]}
              type="submit"
              // disabled={disabled}
              disabled={true}
            >
              <div className={styles["icon-container"]}>
                <SearchIcon />
              </div>
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
