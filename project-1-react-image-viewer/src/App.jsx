import { useState } from 'react';

function App() {
  const pictureIDs = [100, 201, 222, 503, 34];
  const [imageId, setImageId] = useState(pictureIDs[0]);

  const getLoremPicsumImg = (id, width = 800, height = 450) => `https://picsum.photos/id/${id}/${width}/${height}`;

  function handleClick(id) {
    setImageId(id)
  };

  return (
    <main className="container">
      <hgroup>
        <h2>Image Viewer</h2>
        <h3>Image:</h3>
      </hgroup>
      <img src={getLoremPicsumImg(imageId)} alt="" style={{ width: "100%" }} />
      <div className="grid" style={{ marginTop: "30px" }}>
        {
          pictureIDs.map((item, index) =>
            <div key={index}>
              <img
                onClick={() => handleClick(item)}
                src={getLoremPicsumImg(item, 100, 100)}
                alt=""
              />
            </div>
          )
        }
      </div>
    </main>
  )
}

export default App
