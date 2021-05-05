import React, { useEffect } from "react"
import { useDispatch } from 'react-redux'

// Actions
import {getMovies} from "./actions/movies"

// Components
import Form from "./components/Form/Form"
import Movies from "./components/Movies/Movies";

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getMovies())
  }, [dispatch])

  return (
    <div className="app">
        <div className="app-title">
          Screen it
        </div>
        <hr/>
        <Form/>
        <Movies/>
    </div>
  );
}

export default App;
