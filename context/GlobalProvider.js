import { Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router, usePathname } from "expo-router";
import React, { createContext, useContext, useEffect, useState } from "react";

import Cycle from "../lib/api/cycles";
import Ovulation from "../lib/api/ovulations";
import Dashboard from "../lib/api/dashboard";

const getCurrentUser = async () => {
  try {
    const data = await AsyncStorage.getItem("currentUser");
    if (data !== null) {
      return data;
    }
  } catch (error) {
    Alert.alert("Un problème est survenu !", `${error} `);
  }
};

const GlobalContext = createContext();
export const useGlobalContext = () => useContext(GlobalContext);

const GlobalProvider = ({ children }) => {
  const pathname = usePathname();
  const [isLogged, setIsLogged] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  //DatePickerModal state variables
  const [selectedDate, setSelectedDate] = useState("");
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (selectedDate) => {
    setSelectedDate(selectedDate.toLocaleDateString());
    hideDatePicker();
  };

  //** States for app data
  const [cycles, setCycles] = useState([]);
  const [ovulations, setOvulations] = useState([]);
  const [dashboard, setDashboard] = useState({
    Cycles: [],
    ovulations: [],
  });

  const getCycles = async () => {
    try {
      const res = await new Cycle().getAll({
        limit: 300,
        offset: 0,
      });
      if (res.data) {
        setCycles(res.data);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const getOvulations = async () => {
    try {
      const res = await new Ovulation().getAll({
        limit: 300,
        offset: 0,
      });

      if (res.data) {
        setOvulations(res.data);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const getDashboard = async () => {
    try {
      const res = await new Dashboard().getAll({
        limit: 300,
        offset: 0,
      });
      if (res.data) {
        setDashboard(res.data);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const signout = async () => {
    try {
      await AsyncStorage.removeItem("currentUser");
      setCurrentUser(null);
      setIsLogged(false);
      router.navigate("/sign-in");
    } catch (error) {
      Alert.alert("Un problème est survenu !", `${error.message} `);
    }
  };

  useEffect(() => {
    getCurrentUser()
      .then((res) => {
        if (res) {
          setIsLogged(true);
          setCurrentUser(res);
        } else {
          setIsLogged(false);
          setCurrentUser(null);
        }
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [pathname]);

  return (
    <GlobalContext.Provider
      value={{
        isLogged,
        setIsLogged,
        currentUser,
        setCurrentUser,
        loading,
        selectedDate,
        setSelectedDate,
        cycles,
        getCycles,
        signout,
        showDatePicker,
        handleConfirm,
        isDatePickerVisible,
        hideDatePicker,
        dashboard,
        getDashboard,
        ovulations,
        getOvulations,
        loading,
        refreshing,
        setRefreshing,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
