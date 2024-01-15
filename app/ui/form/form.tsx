"use client";

import React, { useState } from "react";
import SearchIcon from "@material-ui/icons/Search";
import CloseIcon from "@material-ui/icons/Close";
// import LocationOnIcon from "@material-ui/icons/LocationOn";
import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";
import { Stay } from "../../lib/types";
import styles from "./form.module.css";

export const Form = ({ staysData }: { staysData: Stay[] }) => {
  const [filtersVisible, setFiltersVisible] = useState(false);
  const [locationFilterVisible, setLocationFilterVisible] = useState(false);
  const [guestFilterVisible, setGuestFilterVisible] = useState(false);

  const childGuestNumber = 5;
  const adultGuestNumber = 2;
  const totalGuestNumber = 0;

  const handleFilterVisibilityClick = (
    event:
      | React.MouseEvent<HTMLInputElement>
      | React.MouseEvent<HTMLButtonElement>
  ) => {
    setFiltersVisible((prevState) => !prevState);
    const { id } = event.currentTarget;

    if (id === "location") {
      setLocationFilterVisible(true);
      setGuestFilterVisible(false);
    }

    if (id === "guests") {
      setGuestFilterVisible(true);
      setLocationFilterVisible(false);
    }
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
                  className={`${styles["searchBar-input"]} ${styles["searchBar-input-location"]}`}
                  type="text"
                  readOnly
                  name="location"
                  id="location"
                  placeholder="Helsinki, Finland"
                  // value={locationSearchOption}
                  value="Helsinki, Finland"
                  onClick={handleFilterVisibilityClick}
                />
                <input
                  className={`${styles["searchBar-input"]} ${styles["searchBar-input-guests"]}`}
                  type="text"
                  readOnly
                  name="guests"
                  id="guests"
                  // placeholder="Add Guests"
                  placeholder={
                    totalGuestNumber < 1
                      ? "Add Guests"
                      : `${totalGuestNumber} guests`
                  }
                  value=""
                  // value={locationSearchOption}
                  // value="Add Guests"
                  onClick={handleFilterVisibilityClick}
                />
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
                  className={styles["searchBar-submit-button"]}
                  type="submit"
                  // disabled={disabled}
                  disabled={true}
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
                  {/* change this from a p tag */}
                  <p className={styles["filter-heading"]}>Edit your search</p>

                  <button
                    className={styles["filter-close-button"]}
                    onClick={handleFilterVisibilityClick}
                    type="button"
                  >
                    <CloseIcon />
                  </button>
                </div>

                <div className={styles["filter-inputs-container"]}>
                  <div className={styles["filter-input-container"]}>
                    <label
                      // htmlFor="filterDrawerLocation"
                      htmlFor="filter-location"
                      className={styles["filter-label"]}
                    >
                      Location
                    </label>
                    <input
                      className={styles["filter-input"]}
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

                  <div className={styles["filter-input-container"]}>
                    <label
                      // htmlFor="filterDrawerGuests"
                      htmlFor="guests"
                      className={styles["filter-label"]}
                    >
                      Guests
                    </label>
                    <div
                      className={
                        styles[
                          `filter-guest-number-container-${totalGuestNumber}`
                        ]
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
                    <input
                      type="hidden"
                      name="children"
                      value={childGuestNumber}
                    />
                    <input
                      type="hidden"
                      readOnly
                      name="adults"
                      value={adultGuestNumber}
                    />
                  </div>

                  <button
                    type="submit"
                    className={styles["filter-button"]}
                    // disabled={disabledSubmit}
                    // onSubmit={() => {
                    //   setFilterDrawerVisible(!filterDrawerVisible);
                    //   handleSearchFormSubmit();
                    // }}
                  >
                    <SearchIcon className={styles["filter-button-icon"]} />
                    Search
                  </button>
                </div>

                {/* </form> */}
                <div className={styles["filter-guests-location-container"]}>
                  {locationFilterVisible && (
                    <div className={styles["filter-location-container"]}>
                      <ul className={styles["filter-location-list"]}>
                        <li className={styles["filter-location-list-item"]}>
                          this will be a city
                        </li>
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
                            disabled={adultGuestNumber < 1}
                            className={
                              styles[
                                `filter-guests-button-disabled-${
                                  adultGuestNumber < 1
                                }`
                              ]
                            }
                            // onClick={decrementAdultGuestNumber}
                          >
                            <RemoveIcon />
                          </button>
                          <p className={styles["filter-guest-number-value"]}>
                            {adultGuestNumber}
                          </p>
                          <button
                            className={styles["filter-guest-button"]}
                            // onClick={incrementAdultGuestNumber}
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
                            className={
                              styles[
                                `filter-guests-button--disabled-${
                                  childGuestNumber < 1
                                }`
                              ]
                            }
                            disabled={childGuestNumber < 1}
                            // onClick={decrementChildGuestNumber}
                          >
                            <RemoveIcon />
                          </button>
                          <p className={styles["filter-guest-number-value"]}>
                            {childGuestNumber}
                          </p>
                          <button
                            className={styles["filter-guest-button"]}
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
        </form>
      </div>
    </>
  );
};
