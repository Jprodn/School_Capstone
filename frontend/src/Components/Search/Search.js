import React from "react";
import axios from "axios";
import Landmark from "./Landmark";
import Select from "react-select";

function Search() {
    const [searchString, setsearchString] = React.useState([]);
    const [data, setData] = React.useState([]);

    const [listState, setListState] = React.useState([]);
    const [listCity, setListCity] = React.useState([]);

    const [selectedState, setselectedState] = React.useState({
        value: "select",
        label: "-Select-",
    });
    const [selectedCity, setselectedCity] = React.useState({
        value: "select",
        label: "-Select-",
    });

    const dataElements = data
        .filter(
            (landmark) =>
                landmark.landmarkName.toLowerCase().includes(searchString) ||
                landmark.category.toLowerCase().includes(searchString)
        )
        .map((item) => {
            return (
                <li key={item.landmarkId} className="listItem">
                    <Landmark item={item} bird={item.landmarkId} />
                </li>
            );
        });

    function handleChange(event) {
        setsearchString(event.target.value);
    }

    function handleSelectState(obj) {
        setselectedState(obj);
    }

    function handleSelectCity(obj) {
        setselectedCity(obj);
    }

    React.useEffect(() => {
        console.log(
            "%c------------Search--------------",
            "color: teal; background-color: black"
        );
        let isMounted = true;
        const fetchLandmark = async () => {
            const response = await axios.get(
                `http://www.localhost:8081/landmark/${selectedState.label}/${selectedCity.label}`
            );
            if (isMounted) {
                setData(response.data);
            }
            console.log(
                "%cresponse.data",
                "color: teal; background-color: black"
            );
            console.log(response.data);
        };
        const fetchStates = async () => {
            const response = await axios.get(
                `http://www.localhost:8081/landmark/states`
            );
            if (isMounted) {
                setListState(response.data);
            }
        };

        const fetchCities = async () => {
            const response = await axios.get(
                `http://www.localhost:8081/landmark/city/${selectedState.label}`
            );
            if (isMounted) {
                setListCity(response.data);
            }
        };

        fetchLandmark();
        fetchStates();
        fetchCities();
        return () => {
            isMounted = false;
        };
    }, [selectedCity, selectedState]);

    const stateOptions = listState.map((state) => {
        return { value: state.toLowerCase(), label: state };
    });

    const cityOptions = listCity.map((city) => {
        return { value: city.toLowerCase(), label: city };
    });

    const styles = {
        control: (styles) => ({ ...styles, marginBottom: "50px" }),
    };
    return (
        <div className="search-div">
            <Select
                styles={styles}
                value={selectedState}
                options={stateOptions}
                onChange={handleSelectState}
                autoFocus
            />

            <Select
                styles={styles}
                value={selectedCity}
                options={cityOptions}
                onChange={handleSelectCity}
            />
            <input
                type="text"
                placeholder="Search"
                className="search"
                onChange={handleChange}
            />
            <ul className="list">{dataElements}</ul>
        </div>
    );
}

export default Search;
