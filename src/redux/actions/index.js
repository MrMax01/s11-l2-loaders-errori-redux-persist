export const ADD_TO_FAVORITE = "ADD_TO_FAVORITE";
export const REMOVE_FROM_FAVORITE = "REMOVE_FROM_FAVORITE";
export const GET_JOBS = "GET_JOBS";
export const GET_JOBS_LOADING_ON = "GET_JOBS_LOADING_ON";
export const GET_JOBS_LOADING_OFF = "GET_JOBS_LOADING_OFF";
export const GET_JOBS_ERROR_ON = "GET_JOBS_ERROR_ON";
export const GET_JOBS_ERROR_OFF = "GET_JOBS_ERROR_OFF";

export const getJobsAction = (baseEndpoint, query) => {
  return async (dispatch, getState) => {
    try {
      dispatch({ type: GET_JOBS_LOADING_ON });
      const response = await fetch(baseEndpoint + query + "&limit=20");
      if (response.ok) {
        const { data } = await response.json();

        dispatch({ type: GET_JOBS, payload: data });
        dispatch({ type: GET_JOBS_ERROR_OFF });
        console.log("DATA", data);
      } else {
        alert("Error fetching results");
        throw new Error("Errore nel reperimento dei dati 😰");
      }
    } catch (error) {
      dispatch({ type: GET_JOBS_ERROR_ON, payload: error.message });
      console.log(error);
    } finally {
      dispatch({ type: GET_JOBS_LOADING_OFF });
    }
  };
};
