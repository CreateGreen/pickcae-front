import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import '../styles/Grid.css';

const Grid = itemList => {
  const convertedList = Object.values(itemList)[0];

  return (
    <div className="grid-content">
      <ImageList sx={{ overflow: 'hidden' }}>
        {convertedList.map(item => (
          <ImageListItem key={item.name}>
            <img src={item.profile.storePath} alt={item.name} />
            <ImageListItemBar
              title={item.name}
              subtitle={<span className="Imageprice">{item.price}</span>}
              position="below"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
};

export default Grid;
