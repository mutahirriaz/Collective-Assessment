import React, {useState} from "react";
import {Col, Container, Row} from "react-bootstrap"
import { singleGistUrl } from "../service";
import { Card, Button, Tag, Divider } from "antd";
import View from "./View";



const Cards = (data) => {
  
  
  const unidata = data.gistData;
  const files = unidata.files;
  const fileArr = [];
  for (let file in files) {
    let language = files[file].language;
    
    if (fileArr.indexOf(language) === -1) {
      fileArr.push(language);
    }
  }
  
  const noOfFiles = Object.keys(files).length;

  const [forkData, setData] = useState([]);
  const [show, setShow] = useState(false);
  const viewFork = async (value) => {
    if (value !== "") {
      try {
        const URL = singleGistUrl(value);
        const res = await fetch(URL);
        const data = await res.json();
        setData(data);
        setShow(true);
      } catch (e) {
        console.log(e);
        setShow(false);
      }
    }
  };
  
  return (
    <div style={{marginTop:"2rem"}}>
        <Container>
        <Card
        title={unidata.description || "No Description"}
        bordered={false}
        
      >
        <p className="numberFiles">
          {noOfFiles} {noOfFiles > 1 ? "Files" : "File"}
        </p>

        <div>
          {fileArr.map((language, index) => {
            return (
              <Tag color="geekblue" key={index}>
                {language}
              </Tag>
            );
          })}
        </div>

        <div className="fileBox">
      <p>Files:</p>
      <ul>
        {Object.values(files).map((file, index) => {
          return (
            <li key={index}>
              <a href={file.raw_url} target="_blank" rel="noreferrer">
                {file.filename}
              </a>
            </li>
          );
        })}
      </ul>
    </div>

    <div style={{textAlign:"center"}}>
          <Button type="primary" onClick={() => viewFork(`/${unidata.id}`)}>
            View Fork
          </Button>
    </div>


        {show && data !== [] ? <View forks={forkData} /> : null}
      </Card>
        <Divider dashed/>
    </Container>
    </div>
  );
};

export default Cards;
