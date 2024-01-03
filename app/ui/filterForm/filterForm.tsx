"use client";

// import Image from "next/image";
import React, { useContext } from "react";
import CloseIcon from "@material-ui/icons/Close";
// import LocationOnIcon from "@material-ui/icons/LocationOn";
import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";
import SearchIcon from "@material-ui/icons/Search";

import styles from "./filterForm.module.css";

import { StaysContext } from "../../context/index";

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

export const FilterForm = ({ staysData }: { staysData: Stay[] }) => {
  const appContext = useContext(StaysContext);

  const filterDrawerVisible = true;

  const guestFilterVisible = true;

  const locationFilterVisible = true;

  const totalGuestNumber = 0;
  const childGuestNumber = 5;
  const adultGuestNumber = 0;

  // pass text down as props

  return (
    <>
      {filterDrawerVisible && (
        <div className={styles["container"]}>
          <div className={styles["inner-container"]}>
            <div className={styles["heading-container"]}>
              {/* change this from a p tag */}
              <p className={styles["heading"]}>Edit your search</p>
              <button
                className={styles["close-button"]}
                // onClick={() => setFilterDrawerVisible(!filterDrawerVisible)}
              >
                <CloseIcon />
              </button>
            </div>
            <form className={styles["form"]}>
              <div className={styles["input-container"]}>
                <label
                  // htmlFor="filterDrawerLocation"
                  htmlFor="location"
                  className={styles["label"]}
                >
                  Location
                </label>
                <input
                  className={styles["input"]}
                  type="text"
                  name="location"
                  required
                  // look at the id
                  id="searchFilter"
                  placeholder="Helsinki, Finland"
                  // value={locationSearchOption}
                  readOnly
                  // onClick={handleOpenLocationFilterChange}
                />
              </div>

              {/* come back to htmlfor */}

              <div className={styles["input-container"]}>
                <label
                  // htmlFor="filterDrawerGuests"
                  htmlFor="guests"
                  className={styles["label"]}
                >
                  Guests
                </label>
                <div
                  className={
                    styles[`guest-number-container-${totalGuestNumber}`]
                  }
                  // onClick={handleOpenGuestFilterChange}
                >
                  {totalGuestNumber < 1
                    ? "Add Guests"
                    : `${totalGuestNumber} guests`}
                </div>
                <input
                  type="hidden"
                  readOnly
                  name="guests"
                  value={totalGuestNumber}
                />
                <input type="hidden" name="children" value={childGuestNumber} />
                <input
                  type="hidden"
                  readOnly
                  name="adults"
                  value={adultGuestNumber}
                />
              </div>

              <button
                type="submit"
                className={styles["button"]}
                // disabled={disabledSubmit}
                // onSubmit={() => {
                //   setFilterDrawerVisible(!filterDrawerVisible);
                //   handleSearchFormSubmit();
                // }}
              >
                <SearchIcon className={styles["button-icon"]} />
                Search
              </button>
            </form>
            <div className={styles["guests-location-container"]}>
              {locationFilterVisible && (
                <div className={styles["location-container"]}>
                  <ul className={styles["location-list"]}>
                    <li className={styles["location-list-item"]}>hi</li>
                    {/* {uniqueLocations.map((city) => (
                      <li
                        className={styles["location-list-item"]}
                        key={uniqid()}
                        onClick={handlelocationSearchChange}
                      >
                        <LocationOnIcon className={styles["location-list-item-icon"]} />
                        {city}
                      </li>
                    ))} */}
                  </ul>
                </div>
              )}
              {guestFilterVisible && (
                <div className={styles["guests-container"]}>
                  <div className={styles["adults-guests-container"]}>
                    <p className={styles["guests-title"]}>Adults</p>
                    <p className={styles["guests-meta"]}>Ages 13 or above </p>
                    <div className={styles["guests-button-container"]}>
                      <button
                        disabled={adultGuestNumber < 1}
                        className={
                          styles[
                            `guests-button-disabled-${adultGuestNumber < 1}`
                          ]
                        }
                        // onClick={decrementAdultGuestNumber}
                      >
                        <RemoveIcon />
                      </button>
                      <p className={styles["guest-number-value"]}>
                        {adultGuestNumber}
                      </p>
                      <button
                        className={styles["guest-button"]}
                        // onClick={incrementAdultGuestNumber}
                      >
                        <AddIcon />
                      </button>
                    </div>
                  </div>
                  <div>
                    <p className={styles["guests-title"]}>Children</p>
                    <p className={styles["guests-meta"]}>Ages 2-12</p>
                    <div className={styles["guests-button-container"]}>
                      <button
                        className={
                          styles[
                            `guests-button--disabled-${childGuestNumber < 1}`
                          ]
                        }
                        disabled={childGuestNumber < 1}
                        // onClick={decrementChildGuestNumber}
                      >
                        <RemoveIcon />
                      </button>
                      <p className={styles["guest-number-value"]}>
                        {childGuestNumber}
                      </p>
                      <button
                        className={styles["guest-button"]}
                        // onClick={incrementChildGuestNumber}
                      >
                        <AddIcon />
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
