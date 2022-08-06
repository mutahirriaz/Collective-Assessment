import React from 'react'
import { Avatar, Image } from "antd";


const View = (data) => {

    let forks = data.forks.forks || [];

    forks = forks.slice(Math.max(forks.length - 3, 1))

  return (
    <div className="forksBox">
    <p>Forks:</p>
    {forks && forks.length !== 0 ? forks.map((fork, i) => (
        <ul key={i}>
        <li >
        <a
          href={`https://gist.github.com/${fork.id}`}
          target="_blank"
          rel="noreferrer"
        >
          <Avatar
            src={<Image src={fork.user.avatar_url} />}
            style={{ margin: 5 }}
          />
          {fork.user.login}
        </a>
      </li>
      </ul>
    )) : <p>No forks yet.</p>}
  </div>
  )
}

export default View