import React from 'react';
import { Alert } from "antd";
import Cards from './Cards';


const Result = (data, username) => {
  const userdata = data.data;
  return (
    <div>
      {username !== null && userdata.length !== 0  && userdata.message !== "Not Found" ? (
        <div>
           <Alert
          message={`${data.username} Gist`}
          description={`${userdata.length} Gists found`}
          type="success"
          showIcon
          style={{ marginTop: 10 }}
        />

            {userdata && userdata.message !== "Not Found" ? userdata.map((gist, index) => {
              return <Cards key={gist.id} gistData={gist} />;
            }) : null}

        </div>
        
      ) : userdata.message === "Not Found" ? (<div>
        <Alert
       message={`${userdata.documentation_url} Gist`}
       description={`Gists ${userdata.message} `}
       type="error"
       showIcon
       style={{ marginTop: 10 }}
     />
     </div>) : null }
      
    </div>
  )
}

export default Result