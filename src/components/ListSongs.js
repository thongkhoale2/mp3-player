import React, { useContext, useEffect, useState } from "react";
import { Songs } from "../Context";

function ListSongs(props) {
  // value to use got by useContext(variable declared in Context.js)
  const { DataSongs, handleSetSong, song } = useContext(Songs);
  // set id of song to be played
  const [idSong, setIdSong] = useState(0);
  const handleChooseSong = (id) => {
    setIdSong(id);
    handleSetSong(id);
  };

  // App re-render -> ListSongs re-render -> useEffect -> setIdSong -> ListSong render again
  useEffect(() => {
    setIdSong(song.id);
  }, [song]);

  return (
    <div className="col-span-2  overflow-y-scroll">
      {console.log("render-list" + Math.random())}
      <table className="table-auto w-full">
        <thead className="text-white h-12">
          <tr>
            <th className="w-[10%]">No.</th>
            <th className="text-left">Title</th>
            <th className="w-[10%]">Author</th>
            <th className="w-[10%]">Download</th>
          </tr>
        </thead>
        <tbody>
          {DataSongs.map((song, index) => (
            <>
              <tr
                key={index}
                className={`bg-slate-800 h-12 text-gray-500  select-none hover:bg-gray-700 hover:text-gray-400 ${
                  idSong === song.id && "text-teal-400 bg-gray-700"
                }`}
                onClick={() => handleChooseSong(song.id)}
              >
                <td className="text-center">{index}</td>
                <td className="">{song.name}</td>
                <td className="text-center">{song.author}</td>
                <td className="text-center">
                  <a href={song.url}>
                    <i className="fa fa-download"></i>
                  </a>
                </td>
              </tr>
            </>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListSongs;
