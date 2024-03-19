"use client";

import React, { useState } from "react";
import SearchIcon from "@material-ui/icons/Search";
import CloseIcon from "@material-ui/icons/Close";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";
import Link from "next/link";

import styles from "@/app/ui/form/form.module.css";

type FormProps = {
  locationOption: string;
  uniqueLocations: string[];
};

export const Form = (props: FormProps) => {
  const [filtersVisible, setFiltersVisible] = useState(false);
  const [locationFilterVisible, setLocationFilterVisible] = useState(false);
  const [guestFilterVisible, setGuestFilterVisible] = useState(false);
  const [adultGuestNumber, setAdultGuestNumber] = useState(0);
  const [childGuestNumber, setChildGuestNumber] = useState(0);

  const totalGuestNumber = childGuestNumber + adultGuestNumber;

  const { locationOption, uniqueLocations } = props;

  const handleFiltersVisibilityClick = (
    event:
      | React.MouseEvent<HTMLInputElement>
      | React.MouseEvent<HTMLButtonElement>
      | React.MouseEvent<HTMLDivElement>
  ) => {
    const { id } = event.currentTarget;
    console.log("Form --- id:", id);

    if (id !== "filterLocation" && id !== "filterGuests") {
      setFiltersVisible((prevState) => !prevState);
    }

    if (id === "searchLocation" || id === "filterLocation") {
      setLocationFilterVisible(true);
      setGuestFilterVisible(false);
    }

    if (id === "searchGuests" || id === "filterGuests") {
      setGuestFilterVisible(true);
      setLocationFilterVisible(false);
    }
  };

  const handleIncrementGuestClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    const { id } = event.currentTarget;
    if (id === "incrementAdult")
      setAdultGuestNumber((prevState) => prevState + 1);

    if (id === "incrementChild")
      setChildGuestNumber((prevState) => prevState + 1);
  };

  const handleDecrementGuestClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    const { id } = event.currentTarget;
    if (id === "decrementAdult")
      setAdultGuestNumber((prevState) => prevState - 1);

    if (id === "decrementChild")
      setChildGuestNumber((prevState) => prevState - 1);
  };

  return (
    <>
      <div className={styles["form-container"]}>
        <form className={`${styles[`form-filters-visible-${filtersVisible}`]}`}>
          {!filtersVisible && (
            <div
              className={`${styles["searchBar-container"]} ${
                styles[`searchBar-container-filters-visible-${filtersVisible}`]
              }`}
            >
              <div className={styles["searchBar-input-container"]}>
                <input
                  type="text"
                  readOnly
                  name="searchLocation"
                  id="searchLocation"
                  placeholder={locationOption}
                  className={`${styles["searchBar-input"]} ${styles["searchBar-input-location"]}`}
                  onClick={handleFiltersVisibilityClick}
                />

                <input
                  type="text"
                  readOnly
                  name="searchGuests"
                  id="searchGuests"
                  placeholder={
                    totalGuestNumber < 1
                      ? "Add Guests"
                      : `${totalGuestNumber} guests`
                  }
                  className={`${styles["searchBar-input"]} ${styles["searchBar-input-guests"]}`}
                  onClick={handleFiltersVisibilityClick}
                />
                <button
                  type="button"
                  disabled={true}
                  className={styles["searchBar-submit-button"]}
                >
                  <div className={styles["searchBar-icon-container"]}>
                    <SearchIcon />
                  </div>
                </button>
              </div>
            </div>
          )}
          {filtersVisible && (
            <div className={styles["filter-container"]}>
              <div className={styles["filter-inner-container"]}>
                <div className={styles["filter-heading-container"]}>
                  <h2 className={styles["filter-heading"]}>Edit your search</h2>
                  <button
                    type="button"
                    id="closeButton"
                    className={styles["filter-close-button"]}
                    onClick={handleFiltersVisibilityClick}
                  >
                    <CloseIcon />
                  </button>
                </div>

                <div className={styles["filter-inputs-container"]}>
                  <div className={styles["filter-input-container"]}>
                    <label
                      htmlFor="filterLocation"
                      className={styles["filter-label"]}
                    >
                      Location
                    </label>
                    <input
                      className={styles["filter-input"]}
                      type="text"
                      name="filterLocation"
                      required
                      id="filterLocation"
                      placeholder={locationOption}
                      readOnly
                      onClick={handleFiltersVisibilityClick}
                    />
                  </div>
                  <div className={styles["filter-input-container"]}>
                    <label
                      htmlFor="filterGuests"
                      className={styles["filter-label"]}
                    >
                      Guests
                    </label>
                    <input
                      type="text"
                      name="filterGuests"
                      id="filterGuests"
                      placeholder={
                        totalGuestNumber < 1
                          ? "Add Guests"
                          : `${totalGuestNumber} guests`
                      }
                      readOnly
                      // className={
                      //   styles[
                      //     `filter-guest-number-container-${totalGuestNumber}`
                      //   ]
                      // }
                      className={styles["filter-input"]}
                      onClick={handleFiltersVisibilityClick}
                    />
                  </div>
                  <div onClick={handleFiltersVisibilityClick} id="linkWrapper">
                    <Link
                      href={`?location=${locationOption}&guests=${totalGuestNumber}&showResults=true`}
                      className={styles["filter-button"]}
                    >
                      <SearchIcon className={styles["filter-button-icon"]} />
                      Search
                    </Link>
                  </div>
                </div>

                <div className={styles["filter-guests-location-container"]}>
                  {locationFilterVisible && (
                    <div className={styles["filter-location-container"]}>
                      <ul className={styles["filter-location-list"]}>
                        {uniqueLocations.map((city) => {
                          return (
                            <li
                              className={styles["location-list-item"]}
                              key={city}
                            >
                              <Link
                                href={`?location=${city}&guests=${totalGuestNumber}`}
                                className={styles["location-list-item-link"]}
                              >
                                <LocationOnIcon
                                  className={styles["location-list-item-icon"]}
                                />
                                {city}
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  )}
                  {guestFilterVisible && (
                    <div className={styles["filter-guests-container"]}>
                      <div className={styles["filter-adults-guests-container"]}>
                        <p className={styles["filter-guests-title"]}>Adults</p>
                        <p className={styles["filter-guests-meta"]}>
                          Ages 13 or above{" "}
                        </p>
                        <div
                          className={styles["filter-guests-button-container"]}
                        >
                          <button
                            type="button"
                            id="decrementAdult"
                            disabled={adultGuestNumber < 1}
                            className={
                              styles[
                                `filter-guests-button-disabled-${
                                  adultGuestNumber < 1
                                }`
                              ]
                            }
                            onClick={handleDecrementGuestClick}
                          >
                            <RemoveIcon />
                          </button>

                          {/* TODO: MAKE A LABEL - improve semantic html here*/}
                          <p className={styles["filter-guest-number-value"]}>
                            {adultGuestNumber}
                          </p>
                          <button
                            type="button"
                            id="incrementAdult"
                            className={styles["filter-guest-button"]}
                            onClick={handleIncrementGuestClick}
                          >
                            <AddIcon />
                          </button>
                        </div>
                      </div>
                      <div>
                        <p className={styles["filter-guests-title"]}>
                          Children
                        </p>
                        <p className={styles["filter-guests-meta"]}>
                          Ages 2-12
                        </p>
                        <div
                          className={styles["filter-guests-button-container"]}
                        >
                          <button
                            type="button"
                            id="decrementChild"
                            disabled={childGuestNumber < 1}
                            className={
                              styles[
                                `filter-guests-button--disabled-${
                                  childGuestNumber < 1
                                }`
                              ]
                            }
                            onClick={handleDecrementGuestClick}
                          >
                            <RemoveIcon />
                          </button>
                          <p className={styles["filter-guest-number-value"]}>
                            {childGuestNumber}
                          </p>
                          <button
                            type="button"
                            id="incrementChild"
                            className={styles["filter-guest-button"]}
                            onClick={handleIncrementGuestClick}
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
        </form>
      </div>
    </>
  );
};
