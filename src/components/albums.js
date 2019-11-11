import React from 'react';

const AlbumList = (props) => {

    const showAlbums = ({ albumList }) => {
        if (albumList) {
            return albumList.map((item, index) => {
                return (<div>
                    <img key={index} src={`/images/albums/${item.cover}.jpg`} />
                    <h1>{item.title}</h1>
                    <h1>{item.year}</h1>
                </div>
                )
            })
        }
    }
    return (
        <div className="album_list">
            {showAlbums(props)}
        </div>
    )
}

export default AlbumList;