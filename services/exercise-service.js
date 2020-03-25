import axios from "axios";
import config from "../assets/config";

export const getExercises = () => {
  return axios.get(
    `${config.apiEndpoint}api/app/exercisePlan/userExercisePlan/032C9684-AFA3-51CF-C114-39F41F71ECAB`
  );
};
