import React from 'react';
import { Card as MuiCard } from '@mui/joy';
import { useState } from 'react';
import { Dialog, DialogContent, Button } from '@mui/material';
import CardCover from '@mui/joy/CardCover';
import ProductCard from './NStudioCard';

const CardSlider = ({ dataList, imgOnly = false }) => {
  console.log("Debug from CardSlider", imgOnly);
  console.log(dataList);
  const formattedDataList = Array.isArray(dataList) ? dataList : Object.values(dataList);
  console.log(formattedDataList)

  const [open, setOpen] = useState(false);
  const [selectedEntity, setSelectedEntity] = useState(null);

  const handleOpen = (url) => {
    console.log(url)
    setSelectedEntity(url);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedEntity(null);
  };

  const cardHoverStyle = {
    transform: 'scale(1.01)', // Scale up slightly on hover
  };

  return (
    <div className="horizontal-scroll-wrapper">
      {formattedDataList.map((entity, index) => (
        imgOnly ? (
          // Image-only case with anchor <a> no link just to make card UI look proper
          <a key={index} onClick={() => handleOpen(entity)}>
          <MuiCard
            key={index}
            style={{ marginRight: "0.5rem" }}
            component="li"
            sx={{
              height: 300,
              width: 534,
              '&:hover': {
                ...cardHoverStyle,
              },
            }}
          >
            <CardCover>
              <img
                src={entity} // Use studio.iconUrl for the image source
                loading="lazy"
                alt="Studio image" // Use studioName for alt text
              />
            </CardCover>
          </MuiCard>
          </a>
        ) : (

          <a key={index} href={`#/studio/${entity.id}`}>
            <ProductCard
              key={entity.id}
              data={entity}
              img_src={entity.iconUrl}
            />
          </a>
        )
      ))}
      <Dialog open={open} onClose={handleClose}>
        {selectedEntity && (
          <>
            <DialogContent sx={{ padding: 0 }}>
              <img
                src={selectedEntity}
                alt={"Image"}
                style={{ maxWidth: '100%', height: 'auto' }}
              />
            </DialogContent>
            <Button sx={{
                          '&:hover': {
                            backgroundColor: '#735EAB',
                            color: 'white',
                          }
                        }} 
                        onClick={handleClose}>Close</Button>
          </>
        )}
      </Dialog>
    </div>

  );
};

export default CardSlider;
