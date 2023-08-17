import React, { useEffect, useState } from 'react';
export const userColumns = [
    { field: "id", headerName: "id", width: 70 },
    {
        field: "service_title",
        headerName: "service_title",
        width: 230,
      },
    
    
    
  
    {
      field: "service_para",
      headerName: "service_para",
      width: 100,
    },
  
      {
        field: "service_image",
        headerName: "service_image",
        width: 230,
        renderCell: (params) => {
          return (
            <div className="cellWithImg">
              <img className="cellImg" src='' alt="avatar" />
              
            </div>
          );
        },
      },
      
    {
      field: "status",
      headerName: "Status",
      width: 160,
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
  
   


