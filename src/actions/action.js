export const doAsync = () => {
  const request = 'promise';

  return dispatch => {
    // can dispatch anything
    return request.then(({ data }) =>
      dispatch({
        type: 'SOME_TYPE',
        payload: data,
      }),
    );
  };
};
