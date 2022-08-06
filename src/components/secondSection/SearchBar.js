import React, {useState} from 'react'
import {allGistUrl} from "../service"
import { Input, Alert, Spin } from "antd";
import Result from './Result';



const { Search } = Input;


const SearchBar = () => {

    const [username, setUsername] = useState(null);
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);


    const onSearch = async (username) => {
        const usersname = username.trim()
        setUsername(usersname);
        setLoading(true);
        if (usersname && usersname !== "") {
          try {
            const URL = allGistUrl(usersname);
            const res = await fetch(URL);
            const data = await res.json();
            setData(data);
            setLoading(false);
            setError(false);
          } catch (e) {
            setLoading(false);
            setError(true);
          }
        } else if (usersname === "") {
          setLoading(false);
          setError(true);
        }
        setLoading(false);
      };

  return (
    <>
       
       <div style={{textAlign:"center"}}>
       <Search
        placeholder="Search Gist by UserName"
        allowClear
        enterButton="Search"
        size="large"
        className="search_bar"
        onSearch={onSearch}
        style={{width:"500px"}}
      />
       </div>

      {loading ? <Spin tip="Loading..." style={{ margin: 10 }} /> : null}

      {username !== "" && data && !error ? (
        <Result  data={data} username={username}/>
      ) : null }

      {username && data.length === 0 ? (
        <Alert
          message="Error"
          description="No data for this User"
          type="error"
          showIcon
          className='error'
          style={{ marginTop: 10 }}
        />
      ) : null}

      {username ==='' ? (
        <Alert
          message="Error"
          description="Please Enter Valid UserName"
          type="error"
          className='error'
          showIcon
          style={{ marginTop: 10 }}
        />
      ) : null}

      
    </>
  )
}

export default SearchBar