import React from "react";
import {withFormik, Form, Field} from "formik";
import axiosWithAuth from "../utils/AxiosWithAuth";
import {loadSongs} from "../actions";
import styled from "styled-components";

const StyledForm = styled(Form)`
  width: 40%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

const StyledField = styled(Field)`
  border: none;
  border-radius: 5px;
  margin: 5px;
`;

const StyledInput = styled.input`
  border-radius: 5px;
  margin: 5px;
`;

function SongForm() {
  return (
    <StyledForm>
      <StyledField type="text" name="track_name" placeholder="Input song name" />
      <StyledInput type="submit" value="Submit!" />
    </StyledForm>
  );
}

const FormikSongForm = withFormik({
  mapPropsToValues: ({track_name = ''}) => ({track_name}),
  handleSubmit({track_name}, {props: {dispatch}}) {
    axiosWithAuth().get(`/api/users/dashboard/search/${track_name}`)
      .then(({data}) => dispatch(loadSongs(data)))
      .catch(e => console.error(e));
  }
})(SongForm);

export default FormikSongForm;
