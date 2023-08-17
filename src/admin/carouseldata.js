import React, { useEffect, useState } from 'react';
export const userColumns = [
    { field: "id", headerName: "id", width: 70 },
    {
        field: "title",
        headerName: "title",
        width: 230,
      },
    
    
    
  
    {
      field: "description",
      headerName: "description",
      width: 300,
    },
  
    {
      field: "home_couter",
      headerName: "home_couter",
      width: 150,
    }, 
     
     
    {
      field: "status",
      headerName: "Status",
      width: 130,
      renderCell: (params) => {
        return (
          <div className={`cellWithStatus ${params.row.status}`}>
            {params.row.status}
          </div>
        );
      },
    },
  ];
  
  
  //temporary data
  
   

